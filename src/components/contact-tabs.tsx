"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Label } from "@radix-ui/react-label";

export function ContactTab() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Mensagem enviada com sucesso!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Erro ao enviar. Tente novamente.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-violet-600 text-white shadow-lg">
      <CardContent className="space-y-6 p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Bora conversar?</h2>
          <p className="mt-1 text-sm text-violet-100">
            Deixe sua mensagem aqui abaixo, vou responder o mais rápido
            possível!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Seu nome"
              onChange={handleChange}
              value={form.name}
              className="w-full rounded border border-violet-300 bg-white p-2"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Seu e-mail"
              onChange={handleChange}
              value={form.email}
              className="w-full rounded border border-violet-300 bg-white p-2"
              required
            />
          </div>

          <div>
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Sua mensagem"
              onChange={handleChange}
              value={form.message}
              className="min-h-[100px] w-full rounded border border-violet-300 bg-white p-2"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer bg-white font-semibold text-violet-600 hover:bg-violet-100"
          >
            {loading ? "Enviando..." : "Enviar mensagem"}
          </Button>

          {status && (
            <p
              className={`mt-2 text-center text-sm ${
                status.includes("sucesso") ? "text-green-300" : "text-red-200"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
