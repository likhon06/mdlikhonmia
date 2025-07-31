"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle, Loader2, Copy, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  })

  const [copied, setCopied] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("likhonmia254@gmail.com")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      })
      return
    }

    setStatus({ type: "loading", message: "Processing your message..." })

    try {
      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Since we can't send emails directly from the frontend,
      // we'll show the formatted message for the user to copy
      setStatus({
        type: "success",
        message: "Message formatted! Please copy the details below and send via your preferred method.",
      })
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or contact me directly.",
      })
    }
  }

  const formatMessage = () => {
    return `Subject: ${formData.subject || "Contact from Portfolio"}

From: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent from Likhon's Portfolio Website`
  }

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(formatMessage())
      setStatus({
        type: "success",
        message: "Message copied to clipboard! You can now paste it in your email client.",
      })
    } catch (err) {
      console.error("Failed to copy message:", err)
    }
  }

  return (
    <div className="space-y-6">
      {/* Quick Contact Options */}
      <div className="grid md:grid-cols-2 gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
        <div className="text-center">
          <p className="text-sm font-medium mb-2">WhatsApp</p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => window.open("https://wa.me/8801967469726", "_blank")}
            className="text-green-600 hover:text-green-700"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            Chat on WhatsApp
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm font-medium mb-2">LinkedIn</p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => window.open("https://www.linkedin.com/in/likhon15/", "_blank")}
            className="text-blue-600 hover:text-blue-700"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Or fill out the form below and I'll format your message for easy copying
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Status Alert */}
        {status.type !== "idle" && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <Alert
              className={`${
                status.type === "success"
                  ? "border-green-200 bg-green-50 dark:bg-green-900/20"
                  : status.type === "error"
                    ? "border-red-200 bg-red-50 dark:bg-red-900/20"
                    : "border-blue-200 bg-blue-50 dark:bg-blue-900/20"
              }`}
            >
              {status.type === "success" && <CheckCircle className="h-4 w-4 text-green-600" />}
              {status.type === "error" && <AlertCircle className="h-4 w-4 text-red-600" />}
              {status.type === "loading" && <Loader2 className="h-4 w-4 text-blue-600 animate-spin" />}
              <AlertDescription
                className={`${
                  status.type === "success"
                    ? "text-green-700 dark:text-green-300"
                    : status.type === "error"
                      ? "text-red-700 dark:text-red-300"
                      : "text-blue-700 dark:text-blue-300"
                }`}
              >
                {status.message}
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              required
              className="w-full"
              disabled={status.type === "loading"}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              required
              className="w-full"
              disabled={status.type === "loading"}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-sm font-medium">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="What's this about?"
            className="w-full"
            disabled={status.type === "loading"}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell me about your project, question, or just say hello..."
            rows={6}
            required
            className="w-full resize-none"
            disabled={status.type === "loading"}
          />
        </div>

        <div className="flex gap-3">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3"
              disabled={status.type === "loading"}
            >
              {status.type === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Format Message
                </>
              )}
            </Button>
          </motion.div>

          {status.type === "success" && formData.message && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type="button" size="lg" variant="outline" onClick={copyMessage} className="px-6 bg-transparent">
                <Copy className="w-5 h-5 mr-2" />
                Copy Message
              </Button>
            </motion.div>
          )}
        </div>

        {/* Formatted Message Preview */}
        {status.type === "success" && formData.message && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium">Formatted Message:</h4>
              <Button size="sm" variant="ghost" onClick={copyMessage}>
                <Copy className="w-4 h-4 mr-1" />
                Copy
              </Button>
            </div>
            <pre className="text-xs text-slate-600 dark:text-slate-400 whitespace-pre-wrap font-mono bg-white dark:bg-slate-900 p-3 rounded border overflow-x-auto">
              {formatMessage()}
            </pre>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Copy this message and send it via your preferred method
            </p>
          </motion.div>
        )}

        <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
          I'll respond within 24 hours! For urgent matters, please use WhatsApp or LinkedIn.
        </p>
      </form>
    </div>
  )
}
