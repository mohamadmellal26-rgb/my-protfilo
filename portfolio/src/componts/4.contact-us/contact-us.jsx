import "./contact-us.css";
import React from 'react';

export default function ContactUs() {
    return (
        <section className="contener">
            <div className="Contact-Us-text">
                <h2><i className="fas fa-envelope"></i> Contact Us</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                
                {/* استخدم رابط الـ Formspree الخاص بك هنا */}
                <form action="https://formspree.io/f/mjgzakvb" method="POST">
                    
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" id="name" required />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" id="email" required />

                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" id="message" rows="5" required></textarea>

                    <button type="submit" className="btn-primary">Send Message</button>
                </form>
            </div>
            
            <div className="Contact-Us-img">
                <img src="/76750978446.png" alt="Contact Illustration" />
            </div>
        </section>
    );
}