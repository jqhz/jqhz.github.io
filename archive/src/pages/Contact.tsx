// "use client"

// import type React from "react"

// import { useState, type FormEvent } from "react"
// import { motion } from "framer-motion"

// interface FormData {
//   name: string
//   email: string
//   message: string
// }

// interface FormErrors {
//   name?: string
//   email?: string
//   message?: string
// }

// export default function Contact() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     message: "",
//   })
//   const [errors, setErrors] = useState<FormErrors>({})
//   const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {}

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required"
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required"
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email"
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required"
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = "Message must be at least 10 characters"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault()

//     if (!validateForm()) {
//       return
//     }

//     setStatus("loading")

//     try {
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       })

//       if (response.ok) {
//         setStatus("success")
//         setFormData({ name: "", email: "", message: "" })
//         setTimeout(() => setStatus("idle"), 5000)
//       } else {
//         setStatus("error")
//         setTimeout(() => setStatus("idle"), 5000)
//       }
//     } catch (error) {
//       console.error("[v0] Contact form submission error:", error)
//       setStatus("error")
//       setTimeout(() => setStatus("idle"), 5000)
//     }
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//     if (errors[name as keyof FormErrors]) {
//       setErrors((prev) => ({ ...prev, [name]: undefined }))
//     }
//   }

//   return (
//     <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-2xl mx-auto">
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//           <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get In Touch</h1>
//           <p className="text-lg text-muted mb-12">
//             Have a project in mind? Let's work together to bring your ideas to life.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Name Field */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-3 bg-background border ${
//                   errors.name ? "border-red-500" : "border-border"
//                 } rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent transition-colors`}
//                 placeholder="Your name"
//               />
//               {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
//             </div>

//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-3 bg-background border ${
//                   errors.email ? "border-red-500" : "border-border"
//                 } rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent transition-colors`}
//                 placeholder="your.email@example.com"
//               />
//               {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
//             </div>

//             {/* Message Field */}
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={6}
//                 className={`w-full px-4 py-3 bg-background border ${
//                   errors.message ? "border-red-500" : "border-border"
//                 } rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent transition-colors resize-none`}
//                 placeholder="Tell me about your project..."
//               />
//               {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={status === "loading"}
//               className="w-full px-8 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {status === "loading" ? "Sending..." : "Send Message"}
//             </button>

//             {/* Status Messages */}
//             {status === "success" && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 text-sm"
//               >
//                 Message sent successfully! I'll get back to you soon.
//               </motion.div>
//             )}

//             {status === "error" && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm"
//               >
//                 Failed to send message. Please try again or contact me directly via email.
//               </motion.div>
//             )}
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   )
// }
export default function Contact() {

}