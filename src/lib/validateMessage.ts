export interface Message {
  name: string;
  email: string;
  issue: string;
  category: string;
  message: string;
}

export function validateMessage(data: Message) {
  const { name, email, issue, category, message } = data;

  // Validate form fields
  if (!name?.trim() || !email?.trim() || !issue?.trim() || !category?.trim() || !message?.trim()) {
    return { valid: false, error: "Todos los campos son obligatorios" };
  }

  // Validate email using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: "Correo electrónico inválido" };
  }

  return { valid: true };
}