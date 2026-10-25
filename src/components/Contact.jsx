import { useState } from 'react';

const initial = { svc: 'Construction', name: '', phone: '', email: '', ptype: 'Residential Property', city: '', msg: '' };

export default function Contact() {
  const [f, setF] = useState(initial);
  const [status, setStatus] = useState({ cls: '', text: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const err = (text) => setStatus({ cls: 'err', text });
    if (!f.name.trim()) return err('Please enter your name.');
    if (!/^[0-9+\-\s]{7,15}$/.test(f.phone.trim())) return err('Please enter a valid mobile number.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) return err('Please enter a valid email address.');
    setStatus({ cls: 'ok', text: 'Thank you! Your request has been sent.' });
    setF(initial);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="title">Contact</h2>
        <div className="contact-in">
          <div className="person">
            <img src="/images/person.png" alt="Businessman holding a folder" />
          </div>
          <form onSubmit={submit} noValidate>
            <p className="who">I am filling this form for: I need services</p>
            <div className="radios">
              {['Construction', 'Interiors', 'Renovation'].map((v) => (
                <label key={v}>
                  <input type="radio" name="svc" value={v} checked={f.svc === v} onChange={set('svc')} />
                  <span>{v}</span>
                </label>
              ))}
            </div>
            <input type="text" placeholder="Name" value={f.name} onChange={set('name')} />
            <input type="tel" placeholder="Mobile Number" value={f.phone} onChange={set('phone')} />
            <input type="email" placeholder="Email" value={f.email} onChange={set('email')} />
            <label className="lbl" htmlFor="ptype">Property Type:</label>
            <select id="ptype" value={f.ptype} onChange={set('ptype')}>
              <option>Residential Property</option>
              <option>Commercial Property</option>
              <option>Industrial Property</option>
            </select>
            <input type="text" placeholder="City" value={f.city} onChange={set('city')} />
            <textarea rows="7" placeholder="Briefly describe your requirement here." value={f.msg} onChange={set('msg')} />
            <p className={`msg ${status.cls}`} role="status">{status.text}</p>
            <button type="submit" className="btn-red">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
