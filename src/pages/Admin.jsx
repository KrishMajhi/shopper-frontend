import React, { useState } from "react";
import "./css/Admin.css";
import { useShop } from "../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faPen, faCheck, faXmark, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const EMPTY = { name:"", image:"", new_price:"", old_price:"", category:"women", sourceList:"all_product", description:"" };
const LISTS = [ {v:"all_product",l:"All Products"}, {v:"popular_data",l:"Popular"}, {v:"new_collection",l:"New Collection"} ];
const CATS  = [ {v:"women",l:"Women"}, {v:"men",l:"Men"}, {v:"kid",l:"Kids"} ];

function Admin() {
  const { all_products, popular_data, collection_products, customProducts, addProduct, updateProduct, deleteProduct } = useShop();
  const [form, setForm]   = useState(EMPTY);
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [showForm, setShowForm] = useState(false);

  const allItems = [
    ...all_products.map(p => ({...p, sourceList:"all_product"})),
    ...popular_data.map(p => ({...p, sourceList:"popular_data"})),
    ...collection_products.map(p => ({...p, sourceList:"new_collection"})),
  ];
  const unique = allItems.filter((p,i,a) => a.findIndex(x=>x.id===p.id)===i);
  const filtered = filter === "all" ? unique : unique.filter(p => p.sourceList === filter);
  const set = (k,v) => setForm(f => ({...f, [k]:v}));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.new_price) return;
    if (editId !== null) {
      updateProduct(editId, { ...form, new_price: Number(form.new_price), old_price: Number(form.old_price) });
      setEditId(null);
    } else {
      addProduct({ ...form, new_price: Number(form.new_price), old_price: Number(form.old_price) });
    }
    setForm(EMPTY); setShowForm(false);
  };

  const startEdit = (p) => {
    if (!p.isCustom) return;
    setForm({ name:p.name, image:p.image||"", new_price:p.new_price, old_price:p.old_price||"", category:p.category, sourceList:p.sourceList, description:p.description||"" });
    setEditId(p.id); setShowForm(true); window.scrollTo({top:0,behavior:"smooth"});
  };
  const cancel = () => { setForm(EMPTY); setEditId(null); setShowForm(false); };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div>
          <h1 className="admin-title">Product Manager</h1>
          <p className="admin-sub">{unique.length} products total · {customProducts.length} custom</p>
        </div>
        <button className="admin-add-btn" onClick={() => { cancel(); setShowForm(true); }}><FontAwesomeIcon icon={faPlus} /> Add Product</button>
      </div>

      {showForm && (
        <div className="admin-form-wrap">
          <div className="admin-form-head">
            <h2>{editId !== null ? "Edit Product" : "New Product"}</h2>
            <button onClick={cancel}><FontAwesomeIcon icon={faXmark} /></button>
          </div>
          <form className="admin-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Product Name *</label>
                <input value={form.name} onChange={e=>set("name",e.target.value)} placeholder="e.g. Classic Linen Shirt" required />
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input value={form.image} onChange={e=>set("image",e.target.value)} placeholder="https://..." />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>New Price (₹) *</label>
                <input type="number" value={form.new_price} onChange={e=>set("new_price",e.target.value)} placeholder="999" required />
              </div>
              <div className="form-group">
                <label>Old Price (₹)</label>
                <input type="number" value={form.old_price} onChange={e=>set("old_price",e.target.value)} placeholder="1499" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Category</label>
                <select value={form.category} onChange={e=>set("category",e.target.value)}>
                  {CATS.map(c => <option key={c.v} value={c.v}>{c.l}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Show In</label>
                <select value={form.sourceList} onChange={e=>set("sourceList",e.target.value)}>
                  {LISTS.map(l => <option key={l.v} value={l.v}>{l.l}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group full">
              <label>Description</label>
              <textarea value={form.description} onChange={e=>set("description",e.target.value)} placeholder="Short product description..." rows={3} />
            </div>
            {form.image && <div className="form-preview"><img src={form.image} alt="preview" /></div>}
            <div className="form-actions">
              <button type="submit" className="btn-save"><FontAwesomeIcon icon={faCheck} /> {editId !== null ? "Save Changes" : "Add Product"}</button>
              <button type="button" className="btn-cancel" onClick={cancel}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="admin-filter-bar">
        {["all",...LISTS.map(l=>l.v)].map(f => (
          <button key={f} className={`filter-btn${filter===f?" active":""}`} onClick={()=>setFilter(f)}>{f==="all"?"All":LISTS.find(l=>l.v===f)?.l}</button>
        ))}
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr><th>Image</th><th>Name</th><th>Category</th><th>List</th><th>Price</th><th>Old Price</th><th>Type</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.id} className={p.isCustom ? "custom-row" : ""}>
                <td><img src={p.image || "https://placehold.co/48x48/0e1220/c9a86c?text=?"} alt="" className="table-img" /></td>
                <td className="td-name">{p.name}</td>
                <td><span className="tag-cat">{p.category}</span></td>
                <td><span className="tag-list">{LISTS.find(l=>l.v===p.sourceList)?.l||p.sourceList}</span></td>
                <td className="td-price">₹{p.new_price}</td>
                <td className="td-old">{p.old_price ? `₹${p.old_price}` : "—"}</td>
                <td><span className={`tag-type${p.isCustom?" custom":""}`}>{p.isCustom ? "Custom" : "Static"}</span></td>
                <td>
                  <div className="table-actions">
                    {p.isCustom && (
                      <>
                        <button className="act-edit" onClick={() => startEdit(p)} title="Edit"><FontAwesomeIcon icon={faPen} /></button>
                        <button className="act-del" onClick={() => deleteProduct(p.id)} title="Delete"><FontAwesomeIcon icon={faTrash} /></button>
                      </>
                    )}
                    {!p.isCustom && <span className="act-static">—</span>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="admin-empty"><FontAwesomeIcon icon={faBoxOpen} /><p>No products found</p></div>
        )}
      </div>
    </div>
  );
}
export default Admin;
