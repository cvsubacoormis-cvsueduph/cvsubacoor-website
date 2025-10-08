import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Beaker,
  BookOpen,
  CheckCircle,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedPage from "@/components/animated-page";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import AnimatedSectionTitle from "@/components/animated-section-title";

export default function ResearchDevelopmentPage() {
  return (
    <>
      <AnimatedPage>
        <div className="container mx-auto px-4 py-12">
          <div className="mb-6 animate-element">
            <Button variant="outline" asChild className="mb-6">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold mb-2">
              Research and Development
            </h1>
            <div className="flex items-center text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              Research and Extension
              <span className="mx-2">/</span>
              <span>Research and Development</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-element">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Advancing Knowledge Through Research
              </h2>
              <p className="mb-4">
                Our university is committed to fostering a vibrant research
                culture that generates new knowledge, addresses societal
                challenges, and enhances the educational experience of our
                students.
              </p>
              <p className="mb-4">
                Through innovative research initiatives, strategic partnerships,
                and interdisciplinary collaboration, we strive to make
                meaningful contributions to science, technology, arts, and
                humanities.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button>Research Opportunities</Button>
                <Button variant="outline">Partner With Us</Button>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="University Research Laboratory"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mission, Vision, Objectives Section */}
          <div className="mb-12 animate-element">
            <AnimatedSectionTitle
              title="Our Research Direction"
              subtitle="Guiding principles that shape our research initiatives and priorities"
              className="mb-8"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    To advance knowledge, foster innovation, and address complex
                    societal challenges through rigorous, ethical, and impactful
                    research that transcends disciplinary boundaries and engages
                    diverse communities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    To be a globally recognized research institution that leads
                    in creating, disseminating, and applying knowledge to
                    improve lives, transform communities, and shape a more
                    sustainable, equitable, and prosperous future.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <span>
                        Excellence and integrity in research practices
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <span>
                        Collaboration across disciplines and institutions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <span>Innovation and creative problem-solving</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <span>Inclusivity and diversity of perspectives</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Strategic Objectives */}
          <div className="mb-12 animate-element">
            <h2 className="text-2xl font-bold mb-6">Strategic Objectives</h2>
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Enhance Research Infrastructure
                    </h4>
                    <p className="mt-1">
                      Develop state-of-the-art facilities, equipment, and
                      digital resources to support cutting-edge research across
                      disciplines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Strengthen Interdisciplinary Collaboration
                    </h4>
                    <p className="mt-1">
                      Foster partnerships across academic departments, research
                      centers, and external organizations to address complex
                      challenges from multiple perspectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Increase External Funding
                    </h4>
                    <p className="mt-1">
                      Expand research funding through competitive grants,
                      industry partnerships, philanthropic support, and
                      government contracts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Enhance Student Research Opportunities
                    </h4>
                    <p className="mt-1">
                      Integrate research experiences into undergraduate and
                      graduate education, preparing students for careers in
                      research and innovation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Accelerate Knowledge Translation
                    </h4>
                    <p className="mt-1">
                      Facilitate the application of research findings to
                      real-world problems through technology transfer,
                      commercialization, and community engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Thrust Areas */}
          <div className="mb-12 animate-element">
            <AnimatedSectionTitle
              title="Research Thrust Areas"
              subtitle="Strategic focus areas where our university is making significant contributions"
              className="mb-8"
            />

            <Tabs defaultValue="health" className="mb-12">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="health">Health & Medicine</TabsTrigger>
                <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
                <TabsTrigger value="technology">Technology & AI</TabsTrigger>
                <TabsTrigger value="society">Society & Culture</TabsTrigger>
              </TabsList>

              {/* Health & Medicine Tab */}
              <TabsContent value="health" className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold mb-4">
                      Health & Medicine Research
                    </h3>
                    <p className="mb-4">
                      Our health and medicine research focuses on improving
                      human health through innovative approaches to disease
                      prevention, diagnosis, and treatment. We combine basic
                      science, clinical research, and population health studies
                      to address pressing health challenges.
                    </p>

                    <div className="space-y-4 mt-6">
                      <div>
                        <h4 className="font-bold text-lg">
                          Key Research Areas
                        </h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Cancer biology and therapeutics</li>
                          <li>Neuroscience and brain disorders</li>
                          <li>Infectious diseases and immunology</li>
                          <li>Genomics and precision medicine</li>
                          <li>Health disparities and global health</li>
                          <li>Biomedical engineering and medical devices</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg">Research Centers</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Center for Cancer Research</li>
                          <li>Institute for Neuroscience</li>
                          <li>Global Health Research Center</li>
                          <li>Genomics and Bioinformatics Laboratory</li>
                          <li>Biomedical Engineering Research Institute</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Health Research"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Featured Project
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-bold">
                          Novel Therapeutics for Neurodegenerative Diseases
                        </h4>
                        <p className="mt-2 text-sm">
                          Our researchers have developed a promising new
                          approach to treating Alzheimer's disease by targeting
                          specific protein pathways involved in neuronal
                          degeneration.
                        </p>
                        <Button variant="outline" className="mt-4 w-full">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Sustainability Tab */}
              <TabsContent value="sustainability" className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold mb-4">
                      Sustainability Research
                    </h3>
                    <p className="mb-4">
                      Our sustainability research addresses the complex
                      challenges of environmental protection, resource
                      conservation, and climate change mitigation. We develop
                      innovative solutions for a more sustainable future through
                      interdisciplinary collaboration.
                    </p>

                    <div className="space-y-4 mt-6">
                      <div>
                        <h4 className="font-bold text-lg">
                          Key Research Areas
                        </h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Renewable energy technologies</li>
                          <li>Climate science and adaptation strategies</li>
                          <li>Sustainable agriculture and food systems</li>
                          <li>Water resources management</li>
                          <li>Green building design and urban planning</li>
                          <li>
                            Biodiversity conservation and ecosystem services
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg">Research Centers</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Center for Climate Science</li>
                          <li>Renewable Energy Research Institute</li>
                          <li>Sustainable Agriculture Laboratory</li>
                          <li>Water Resources Research Center</li>
                          <li>Urban Sustainability Initiative</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Sustainability Research"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Featured Project
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-bold">
                          Next-Generation Solar Energy Storage
                        </h4>
                        <p className="mt-2 text-sm">
                          Our researchers have developed an innovative energy
                          storage solution that significantly improves the
                          efficiency and cost-effectiveness of solar power
                          systems.
                        </p>
                        <Button variant="outline" className="mt-4 w-full">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Technology & AI Tab */}
              <TabsContent value="technology" className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold mb-4">
                      Technology & AI Research
                    </h3>
                    <p className="mb-4">
                      Our technology and AI research focuses on developing
                      innovative computational approaches and digital
                      technologies to solve complex problems across disciplines.
                      We explore the frontiers of artificial intelligence, data
                      science, and computing.
                    </p>

                    <div className="space-y-4 mt-6">
                      <div>
                        <h4 className="font-bold text-lg">
                          Key Research Areas
                        </h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Machine learning and deep learning</li>
                          <li>Natural language processing</li>
                          <li>Computer vision and robotics</li>
                          <li>Cybersecurity and privacy</li>
                          <li>Human-computer interaction</li>
                          <li>Quantum computing</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg">Research Centers</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Artificial Intelligence Research Institute</li>
                          <li>Data Science Center</li>
                          <li>Robotics and Automation Laboratory</li>
                          <li>Cybersecurity Research Center</li>
                          <li>Quantum Computing Initiative</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Technology Research"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Featured Project
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-bold">
                          AI for Medical Diagnostics
                        </h4>
                        <p className="mt-2 text-sm">
                          Our researchers have developed an AI system that can
                          detect early signs of disease from medical images with
                          accuracy comparable to experienced radiologists.
                        </p>
                        <Button variant="outline" className="mt-4 w-full">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Society & Culture Tab */}
              <TabsContent value="society" className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold mb-4">
                      Society & Culture Research
                    </h3>
                    <p className="mb-4">
                      Our society and culture research examines the complex
                      dynamics of human societies, cultural expressions, and
                      social institutions. We explore how individuals and
                      communities navigate social, political, economic, and
                      cultural challenges.
                    </p>

                    <div className="space-y-4 mt-6">
                      <div>
                        <h4 className="font-bold text-lg">
                          Key Research Areas
                        </h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Social inequality and justice</li>
                          <li>Cultural heritage and preservation</li>
                          <li>Media and communication studies</li>
                          <li>Political systems and governance</li>
                          <li>Education policy and practice</li>
                          <li>Arts and humanities in contemporary society</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg">Research Centers</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Center for Social Justice Research</li>
                          <li>Cultural Studies Institute</li>
                          <li>Media and Digital Communication Laboratory</li>
                          <li>Center for Educational Policy</li>
                          <li>Arts and Humanities Research Initiative</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Society Research"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Featured Project
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-bold">
                          Digital Preservation of Cultural Heritage
                        </h4>
                        <p className="mt-2 text-sm">
                          Our researchers are using advanced digital
                          technologies to document, preserve, and make
                          accessible endangered cultural artifacts and
                          traditions from around the world.
                        </p>
                        <Button variant="outline" className="mt-4 w-full">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Research Resources */}
          <div className="bg-slate-50 p-6 rounded-lg animate-element">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Research Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Beaker className="h-5 w-5 text-primary" />
                    Research Facilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Explore our state-of-the-art laboratories, equipment, and
                    specialized research facilities.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Facilities
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Research Teams
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Meet our faculty researchers, research staff, and student
                    researchers across disciplines.
                  </p>
                  <Button className="w-full">Meet Our Researchers</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Publications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Access our research publications, reports, and scholarly
                    works in our digital repository.
                  </p>
                  <Button variant="outline" className="w-full">
                    Browse Publications
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedPage>
      <Footer />
      <BackToTop />
    </>
  );
}
