import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Instagram, Youtube } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 text-gray-800">
      <header className="bg-white shadow p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-600">ASSEMBLET SOLUTION LLP</h1>
        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 text-gray-600 hover:text-yellow-600" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-6 h-6 text-gray-600 hover:text-yellow-600" />
          </a>
        </div>
      </header>

      <section className="p-10 text-center">
        <h2 className="text-4xl font-semibold mb-4">Luxury Interiors Tailored for You</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          At Assemblet Solution LLP, we blend creativity with functionality to design bespoke interiors that reflect your unique taste and lifestyle.
        </p>
        <Button className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full">Get in Touch</Button>
      </section>

      <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Modular Interiors</h3>
            <p>Custom-designed kitchens, wardrobes, and furniture made to fit your space perfectly.</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Turnkey Projects</h3>
            <p>We handle everything from concept to completion, delivering your dream home hassle-free.</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">3D Design & Visualization</h3>
            <p>Visualize your space before it comes to life with our advanced 3D rendering services.</p>
          </CardContent>
        </Card>
      </section>

      <section className="p-10 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="/images/project1.jpg" alt="Project 1" className="rounded shadow" />
          <img src="/images/project2.jpg" alt="Project 2" className="rounded shadow" />
          <img src="/images/project3.jpg" alt="Project 3" className="rounded shadow" />
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <form className="max-w-xl mx-auto bg-white p-6 rounded shadow-md space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" required />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" required />
          <textarea placeholder="Your Message" rows="5" className="w-full p-3 border rounded" required></textarea>
          <Button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white w-full py-3">Send Message</Button>
        </form>
      </section>

      <footer className="bg-white text-center p-6 text-sm text-gray-500 mt-10">
        © 2025 Assemblet Solution LLP · Plot No: 342, Kingwood Enclave, Sec-3, Wave City, NH-24, Ghaziabad UP · assembletsolution1@gmail.com · 8368263949
      </footer>
    </div>
  );
}