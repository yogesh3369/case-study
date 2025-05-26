import { Mail, Linkedin, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Let's Work Together</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Ready to create exceptional user experiences? Let's discuss your next project
            </p>
          </div>

          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Get In Touch</h3>
                <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  I'm always interested in discussing new opportunities, whether it's a full-time role, freelance
                  project, or just a chat about UX design. Feel free to reach out!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <a
                  href="mailto:hello@example.com"
                  className="group flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                >
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700 group-hover:text-blue-700">Email</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 text-purple-600" />
                  <span className="text-slate-700 group-hover:text-purple-700">LinkedIn</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300"
                >
                  <Github className="h-5 w-5 text-indigo-600" />
                  <span className="text-slate-700 group-hover:text-indigo-700">GitHub</span>
                </a>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="mailto:hello@example.com" className="flex items-center gap-2">
                  Start a Conversation
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
