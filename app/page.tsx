"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Moon,
  Sun,
  Mail,
  Download,
  MapPin,
  Briefcase,
  Star,
  User,
  Code,
  Award,
  Trophy,
  Target,
  Calendar,
  Github,
  ExternalLink,
  Linkedin,
  GraduationCap,
  Home,
  FileText,
  Wrench,
  FolderOpen,
  MessageCircle,
  Menu,
  X,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactForm } from "@/components/contact-form"

const pageVariants = {
  initial: { opacity: 0, x: 300 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: -300 },
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
}

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
}

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentPage, setCurrentPage] = useState("home")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)



  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleDownloadCV = () => {
    // Open your CV from Google Drive in a new tab
    window.open('https://drive.google.com/file/d/189RvEmivI0KNjPa_vDwxaj7IkjIsG5Sj/view?usp=sharing', '_blank')
  }

  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: FileText },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Wrench },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: MessageCircle },
  ]

  const skills = {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Angular", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "NestJS", level: 80 },
      { name: "Python", level: 75 },
      { name: "C/C++", level: 85 },
      { name: "PHP", level: 70 },
    ],
    database: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "Firebase", level: 80 },
    ],
    tools: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Linux", level: 80 },
    ],
  }

  const experiences = [
    {
      title: "Jr. Software Engineer",
      company: "ImpleVista",
      period: "Nov 2024 - May 2025",
      location: "Dhaka, Bangladesh (On-site)",
      type: "Full-time",
      description:
        "Frontend Developer for Holcim Project using Angular, TypeScript, and Ionic. Worked with Google Maps & OSM APIs in Scrum/Agile environment.",
      technologies: ["Angular", "TypeScript", "Ionic", "Google Maps API", "Git"],
    },
    {
      title: "Intern Developer",
      company: "Itransition Group",
      period: "Sep 2024 - Nov 2024",
      location: "United States (Remote)",
      type: "Internship",
      description:
        "Solved software engineering problems and learned security code methods. Gained experience in TypeScript and problem-solving.",
      technologies: ["TypeScript", "Problem Solving", "Security"],
    },
  ]

  const projects = [
    {
      title: "Melanoma Skin Cancer Detection",
      description:
        "A research project using CNN Deep Learning to detect melanoma skin cancer with 94% accuracy. Trained on 42k+ images using various models.",
      technologies: ["Python", "TensorFlow", "Keras", "CNN", "Streamlit"],
      github: "https://github.com/YSISLM104926/M-MB-D-DL-Keras-TensorFlow-",
      image: "/placeholder.svg?height=200&width=300&text=AI+Cancer+Detection",
      category: "AI/ML",
    },
    {
      title: "Disaster Management System",
      description:
        "A fullstack real-time disaster monitoring platform for reporting incidents and accessing emergency resources with admin dashboard.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Ant Design", "Redux"],
      github: "https://github.com/YSISLM104926/dmm-frontend",
      image: "/placeholder.svg?height=200&width=300&text=Disaster+Management",
      category: "Web App",
    },
    {
      title: "TechRubix E-commerce",
      description:
        "A full-stack e-commerce platform for tech products with admin dashboard for product management and user authentication.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Material-UI", "Redux"],
      github: "https://github.com/YSISLM104926/TechRubix_TechxEcommerce-V3-Frontend",
      image: "/placeholder.svg?height=200&width=300&text=E-commerce+Platform",
      category: "E-commerce",
    },
  ]

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <motion.div
            key="home"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="flex flex-col items-center justify-center min-h-screen text-center px-4 max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative inline-block mb-8"
            >
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl">
                <Image
                  src="https://i.ibb.co/SXj7xLcK/NR-P0106-cleanup-optimized-2000.png"
                  alt="Md Likhon Mia"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl xl:text-8xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Md Likhon Mia
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl xl:text-3xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto"
            >
              Software Development Engineer | Full-Stack Developer | AI/ML Enthusiast
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Dhaka, Bangladesh
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Briefcase className="w-4 h-4 mr-2" />
                Available for Remote Work
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Star className="w-4 h-4 mr-2" />1 Year Experience
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => setCurrentPage("contact")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" onClick={handleDownloadCV}>
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        )

      case "about":
        return (
          <motion.div
            key="about"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="container mx-auto max-w-7xl px-4 py-8"
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <User className="w-6 h-6 mr-3 text-blue-600" />
                  Professional Summary
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  I'm a passionate Software Development Engineer with a B.Sc. in Computer Science and Engineering from
                  Daffodil International University. I specialize in full-stack development with expertise in modern web
                  technologies and AI/ML applications.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  With 1 year of professional experience, I've worked with frontend frameworks like React and Angular,
                  backend technologies including Node.js and NestJS, and databases like MongoDB and PostgreSQL. I'm
                  always eager to take on new challenges and continuously learn cutting-edge technologies.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                    <Trophy className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">94%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">ML Model Accuracy</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg">
                    <Target className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">500+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Problems Solved</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0">
                  <div className="flex items-center mb-4">
                    <Code className="w-6 h-6 mr-3 text-blue-600" />
                    <h4 className="text-xl font-semibold">Technical Expertise</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Angular", "Node.js", "TypeScript", "Python", "MongoDB", "PostgreSQL"].map(
                      (tech) => (
                        <Badge key={tech} variant="secondary" className="bg-white/50 dark:bg-slate-800/50">
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-0">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 mr-3 text-green-600" />
                    <h4 className="text-xl font-semibold">Achievements</h4>
                  </div>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• 3rd Position - CampusBoi Programming Contest</li>
                    <li>• Unlock Algorithm Contest</li>
                    <li>• CGPA: 3.59/4.00 in CSE</li>
                    <li>• 500+ Competitive Programming Problems Solved</li>
                  </ul>
                </Card>
              </div>
            </div>
          </motion.div>
        )

      case "experience":
        return (
          <motion.div
            key="experience"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="container mx-auto max-w-7xl px-4 py-8"
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>

            <div className="space-y-8 max-w-5xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex flex-wrap justify-between items-start gap-4">
                        <div>
                          <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="whitespace-nowrap">
                          {exp.type}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )

      case "education":
        return (
          <motion.div
            key="education"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="container mx-auto max-w-7xl px-4 py-8"
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education & Certifications
              </span>
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8 mb-12">
              {/* Education Card */}
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Card className="p-8 h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Bachelor's Degree</h3>
                      <p className="text-slate-600 dark:text-slate-400">Computer Science & Engineering</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Institution:</span>
                      <span className="text-slate-600 dark:text-slate-400">Daffodil International University</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Duration:</span>
                      <span className="text-slate-600 dark:text-slate-400">2020 - 2024</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">CGPA:</span>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                      >
                        3.59/4.00
                      </Badge>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Key Subjects:</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Data Structures",
                          "Algorithms",
                          "Database Systems",
                          "Software Engineering",
                          "Machine Learning",
                          "Web Development",
                        ].map((subject) => (
                          <Badge key={subject} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Achievements Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="p-8 h-full bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-0 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                      <Trophy className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Achievements</h3>
                      <p className="text-slate-600 dark:text-slate-400">Academic & Programming</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-yellow-500 mr-3" />
                        <span className="text-sm font-medium">CampusBoi Programming Contest</span>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                      >
                        3rd Place
                      </Badge>
                    </div>
                    <a 
                      href="https://docs.google.com/spreadsheets/d/1Tekd68yYNN5_Gkbz16c09O__0w1KHaKsV5D54yJYWXw/edit?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center mt-1"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Results
                    </a>

                    <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-orange-500 mr-3" />
                        <span className="text-sm font-medium">Unlock Algorithm Contest</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                      <div className="flex items-center">
                        <Code className="w-5 h-5 text-blue-500 mr-3" />
                        <span className="text-sm font-medium">Problems Solved</span>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                      >
                        500+
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Certifications Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Professional Certifications
                </span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Complete Web Development L1",
                    provider: "PH",
                    description: "Full-stack web development fundamentals",
                    color: "blue",
                  },
                  {
                    title: "Next Level Web Development L2",
                    provider: "PH",
                    description: "Advanced web development concepts",
                    color: "purple",
                    link: "https://web.programming-hero.com/verification?validationNumber=PHlevel2-batch2-mernL2B2-04781133",
                  },
                  {
                    title: "Competitive Programming",
                    provider: "Synapse",
                    description: "Algorithm and data structure mastery",
                    color: "green",
                  },
                ].map((cert, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div
                      className={`w-12 h-12 bg-${cert.color}-100 dark:bg-${cert.color}-900/30 rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Award className={`w-6 h-6 text-${cert.color}-600`} />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{cert.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {cert.provider}
                      </Badge>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Verify
                        </a>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )

      case "skills":
        return (
          <motion.div
            key="skills"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="container mx-auto max-w-7xl px-4 py-8"
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>

            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="database">Database</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
              </TabsList>

              {Object.entries(skills).map(([category, skillList]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {skillList.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        )

      case "projects":
        return (
          <motion.div
            key="projects"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="container mx-auto max-w-7xl px-4 py-8"
          >
            <h2 className="text-4xl font-bold text-center mb-16 mt-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90 text-slate-800">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )

      case "contact":
        return (
          <motion.div
            key="contact"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="container mx-auto max-w-4xl px-4 py-8"
          >
            <h2 className="text-4xl font-bold text-center mb-8 mt-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto text-center">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology and innovation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <MessageSquare className="w-8 h-8 mx-auto mb-4 text-green-600" />
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">+880 1967469726</p>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <MapPin className="w-8 h-8 mx-auto mb-4 text-red-600" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Dhaka, Bangladesh</p>
                </Card>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Get In Touch</h3>
                <ContactForm />
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex justify-center space-x-6 mb-16"
            >
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/YSISLM104926" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/likhon15/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-16">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-8 h-8 mr-3 text-blue-600" />
                    <div>
                      <h3 className="text-xl font-semibold">Education</h3>
                      <p className="text-slate-600 dark:text-slate-400">Computer Science and Engineering</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Institution:</strong> Daffodil International University
                    </p>
                    <p>
                      <strong>Duration:</strong> 2020 - 2024
                    </p>
                    <p>
                      <strong>CGPA:</strong> 3.59/4.00
                    </p>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 mr-3 text-green-600" />
                    <div>
                      <h3 className="text-xl font-semibold">Certifications</h3>
                      <p className="text-slate-600 dark:text-slate-400">Professional Development</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Complete Web Development L1</span>
                      <Badge variant="outline">PH</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Next Level Web Development L2</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">PH</Badge>
                        <a
                          href="https://web.programming-hero.com/verification?validationNumber=PHlevel2-batch2-mernL2B2-04781133"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Verify
                        </a>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Competitive Programming</span>
                      <Badge variant="outline">Synapse</Badge>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 lg:flex">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-2 left-2 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md"
        >
          {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Collapse Button - Only show when sidebar is open */}
      {sidebarOpen && (
        <div className="lg:hidden fixed top-2 left-14 z-50">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-2 hover:border-blue-400 dark:hover:border-blue-500"
            title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <div className={`w-2 h-2 bg-current transition-all duration-300 ${sidebarCollapsed ? 'scale-100' : 'scale-75'}`}></div>
            </div>
          </Button>
        </div>
      )}

      {/* Mobile Theme Toggle */}
      <div className="lg:hidden fixed top-2 right-2 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={handleThemeToggle}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-2 hover:border-blue-400 dark:hover:border-blue-500"
        >
          <motion.div
            initial={false}
            animate={{
              rotate: theme === "dark" ? 180 : 0,
              scale: theme === "dark" ? 0.9 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-yellow-500" />
            ) : (
              <Moon className="h-4 w-4 text-blue-600" />
            )}
          </motion.div>
        </Button>
      </div>

      {/* Desktop Controls */}
      <div className="hidden lg:flex fixed top-2 right-2 z-50 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-2 hover:border-blue-400 dark:hover:border-blue-500"
        >
          {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
        {sidebarOpen && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-2 hover:border-blue-400 dark:hover:border-blue-500"
            title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <div className={`w-2 h-2 bg-current transition-all duration-300 ${sidebarCollapsed ? 'scale-100' : 'scale-75'}`}></div>
            </div>
          </Button>
        )}
        <Button
          variant="outline"
          size="icon"
          onClick={handleThemeToggle}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-2 hover:border-blue-400 dark:hover:border-blue-500"
        >
          <motion.div
            initial={false}
            animate={{
              rotate: theme === "dark" ? 180 : 0,
              scale: theme === "dark" ? 0.9 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-yellow-500" />
            ) : (
              <Moon className="h-4 w-4 text-blue-600" />
            )}
          </motion.div>
        </Button>
      </div>

      {/* Sidebar */}
      <motion.aside
        initial="closed"
        animate={sidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed left-0 top-0 z-40 h-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-r border-slate-200 dark:border-slate-700 transition-all duration-300 ${
          sidebarCollapsed 
            ? "w-70 lg:w-20 xl:w-20 2xl:w-20" 
            : "w-70 lg:w-80 xl:w-96 2xl:w-[400px]"
        } ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Profile Section */}
          <div className="p-6 pt-16 border-b border-slate-200 dark:border-slate-700">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700 mb-3">
                <Image
                  src="/profile.jpg"
                  alt="Md Likhon Mia"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              {!sidebarCollapsed && (
                <>
                  <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Likhon Mia
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Software Engineer</p>
                </>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <li key={item.id}>
                    <button
                              onClick={() => {
          setCurrentPage(item.id)
          if (window.innerWidth < 1024) {
            setSidebarOpen(false)
          }
        }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        currentPage === item.id
                          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shadow-sm"
                          : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                      title={sidebarCollapsed ? item.label : undefined}
                    >
                      <IconComponent className="w-5 h-5 flex-shrink-0" />
                      {!sidebarCollapsed && <span className="font-medium">{item.label}</span>}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="text-xs text-slate-500 dark:text-slate-400 text-center">
              {!sidebarCollapsed && "© 2025 Md Likhon Mia"}
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="min-h-screen flex-1 transition-all duration-300 lg:ml-0">
        <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
      </main>
    </div>
  )
}
