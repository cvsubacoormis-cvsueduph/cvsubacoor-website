import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Building,
  CheckCircle,
  Globe,
  Handshake,
  Lightbulb,
  Target,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedPage from "@/components/animated-page";
import AnimatedSectionTitle from "@/components/animated-section-title";
import DrivePreview from "@/components/drive-preview";

export default function ExtensionServicesPage() {
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
            <h1 className="text-3xl font-bold mb-2">Extension Services</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              Research and Extension
              <span className="mx-2">/</span>
              <span>Extension Services</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-element">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Connecting Knowledge with Communities
              </h2>
              <p className="mb-4">
                Beyond academic excellence, CvSU Bacoor is deeply committed to
                community engagement and extension services. In{" "}
                <span className="font-semibold">2017</span>, the campus launched{" "}
                <span className="font-semibold">BACOOREx</span>, a
                community-based extension program capable of utilizing research
                output, assisting the community in managing their limited
                resources and providing access to services. This program
                underscores the university’s role not only as an educational
                institution but also as a catalyst for positive community impact
                and sustainable development.
              </p>
              <p className="mb-4">
                Through collaborative partnerships, educational programs, and
                technical assistance, we extend the university's resources
                beyond campus boundaries to create positive social impact and
                sustainable development.
              </p>
              {/* <div className="flex flex-wrap gap-4 mt-6">
                <Button>Request Services</Button>
                <Button variant="outline">Become a Partner</Button>
              </div> */}
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/bacoorex.png"
                alt="Community Outreach Program"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Mission, Vision, Objectives Section */}
          <div className="mb-12 animate-element">
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
                    To extend university knowledge and resources to diverse
                    communities through collaborative partnerships that address
                    local needs, enhance quality of life, and promote
                    sustainable development.
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
                    To be a leading institution in community engagement,
                    recognized for creating meaningful partnerships that empower
                    communities, foster social innovation, and contribute to
                    positive societal transformation.
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
                      <span>Reciprocity and mutual benefit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <span>Respect for community knowledge and expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <span>Inclusivity and cultural sensitivity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <span>Sustainability and long-term impact</span>
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
                      Strengthen Community Partnerships
                    </h4>
                    <p className="mt-1">
                      Develop and maintain mutually beneficial relationships
                      with community organizations, government agencies,
                      businesses, and other stakeholders.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Enhance Knowledge Transfer
                    </h4>
                    <p className="mt-1">
                      Facilitate the application of university research and
                      expertise to address community needs and challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Expand Service-Learning Opportunities
                    </h4>
                    <p className="mt-1">
                      Integrate community service with academic learning to
                      enrich student education and provide valuable assistance
                      to communities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Promote Sustainable Development
                    </h4>
                    <p className="mt-1">
                      Support initiatives that enhance economic vitality,
                      environmental stewardship, and social well-being in
                      communities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Measure and Communicate Impact
                    </h4>
                    <p className="mt-1">
                      Assess the outcomes and effectiveness of extension
                      programs and share success stories with stakeholders and
                      the broader community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DrivePreview />
          {/* Extension Thrust Areas */}
          <div className="mb-12 animate-element">
            <AnimatedSectionTitle
              title="Extension Thrust Areas"
              subtitle="Strategic focus areas where our university is making significant community impact"
              className="mb-8"
            />

            {/* <Tabs defaultValue="education" className="mb-12"> */}
            {/* <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="education">
                  Education & Training
                </TabsTrigger>
                <TabsTrigger value="health">Health & Wellness</TabsTrigger>
                <TabsTrigger value="economic">Economic Development</TabsTrigger>
                <TabsTrigger value="environment">
                  Environmental Stewardship
                </TabsTrigger>
              </TabsList> */}

            {/* Education & Training Tab */}
            {/* <TabsContent value="education" className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold mb-4">
                      Education & Training Programs
                    </h3>
                    <p className="mb-4">
                      Our education and training programs extend university
                      expertise to diverse learners beyond traditional degree
                      programs. We offer workshops, seminars, certificate
                      programs, and other educational opportunities to enhance
                      knowledge and skills in various fields.
                    </p>

                    <div className="space-y-4 mt-6">
                      <div>
                        <h4 className="font-bold text-lg">Key Program Areas</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Adult literacy and continuing education</li>
                          <li>Professional development for educators</li>
                          <li>Youth leadership and STEM education</li>
                          <li>Digital literacy and technology training</li>
                          <li>
                            Financial literacy and entrepreneurship education
                          </li>
                          <li>Cultural and arts education</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg">
                          Featured Initiatives
                        </h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Community Learning Centers</li>
                          <li>Teacher Professional Development Institute</li>
                          <li>Youth STEM Camps and Competitions</li>
                          <li>Digital Skills for Seniors Program</li>
                          <li>Small Business Development Workshops</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Education Outreach"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Success Story</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-bold">
                          Rural Digital Literacy Initiative
                        </h4>
                        <p className="mt-2 text-sm">
                          Our digital literacy program has trained over 5,000
                          residents in rural communities, helping bridge the
                          digital divide and providing essential skills for the
                          modern workforce.
                        </p>
                        <Button variant="outline" className="mt-4 w-full">
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent> */}

            {/* Health & Wellness Tab */}
            {/* <TabsContent value="health" className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold mb-4">
                      Health & Wellness Programs
                    </h3>
                    <p className="mb-4">
                      Our health and wellness programs promote physical, mental,
                      and social well-being in communities through education,
                      prevention, and intervention initiatives. We collaborate
                      with healthcare providers, public health agencies, and
                      community organizations to improve health outcomes.
                    </p>

                    <div className="space-y-4 mt-6">
                      <div>
                        <h4 className="font-bold text-lg">Key Program Areas</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Preventive health education</li>
                          <li>Nutrition and food security</li>
                          <li>Mental health awareness and support</li>
                          <li>Maternal and child health</li>
                          <li>Aging and elder care</li>
                          <li>Substance abuse prevention</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg">
                          Featured Initiatives
                        </h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Community Health Worker Training Program</li>
                          <li>
                            Healthy Eating Active Living (HEAL) Initiative
                          </li>
                          <li>Mental Health First Aid Training</li>
                          <li>Mobile Health Screening Clinics</li>
                          <li>Intergenerational Wellness Programs</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Health Outreach"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Success Story</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-bold">Rural Health Initiative</h4>
                        <p className="mt-2 text-sm">
                          Our mobile health clinics have provided essential
                          preventive care services to over 10,000 residents in
                          underserved rural communities, significantly improving
                          access to healthcare.
                        </p>
                        <Button variant="outline" className="mt-4 w-full">
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent> */}

            {/* Economic Development Tab */}
            {/* <TabsContent value="economic" className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold mb-4">
                      Economic Development Programs
                    </h3>
                    <p className="mb-4">
                      Our economic development programs support business growth,
                      workforce development, and community economic vitality. We
                      provide technical assistance, training, and resources to
                      entrepreneurs, businesses, and local governments to foster
                      sustainable economic prosperity.
                    </p>

                    <div className="space-y-4 mt-6">
                      <div>
                        <h4 className="font-bold text-lg">Key Program Areas</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>
                            Small business development and entrepreneurship
                          </li>
                          <li>Workforce training and career development</li>
                          <li>Agricultural extension and innovation</li>
                          <li>Tourism and hospitality development</li>
                          <li>Community economic planning</li>
                          <li>Technology transfer and commercialization</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg">
                          Featured Initiatives
                        </h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Small Business Development Center</li>
                          <li>Workforce Skills Training Program</li>
                          <li>Agricultural Innovation Network</li>
                          <li>Community Economic Development Planning</li>
                          <li>Technology Entrepreneurship Incubator</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Economic Development"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Success Story</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-bold">
                          Rural Entrepreneurship Initiative
                        </h4>
                        <p className="mt-2 text-sm">
                          Our entrepreneurship program has helped launch over
                          200 small businesses in rural communities, creating
                          jobs and stimulating local economic growth.
                        </p>
                        <Button variant="outline" className="mt-4 w-full">
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent> */}

            {/* Environmental Stewardship Tab */}
            {/* <TabsContent value="environment" className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold mb-4">
                      Environmental Stewardship Programs
                    </h3>
                    <p className="mb-4">
                      Our environmental stewardship programs promote sustainable
                      practices, natural resource conservation, and
                      environmental education. We work with communities to
                      address environmental challenges and develop solutions
                      that balance ecological health with human needs.
                    </p>

                    <div className="space-y-4 mt-6">
                      <div>
                        <h4 className="font-bold text-lg">Key Program Areas</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Water quality and conservation</li>
                          <li>Sustainable agriculture and food systems</li>
                          <li>Climate change adaptation and resilience</li>
                          <li>Waste reduction and recycling</li>
                          <li>Environmental education and outreach</li>
                          <li>Natural resource management</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg">
                          Featured Initiatives
                        </h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Watershed Protection Program</li>
                          <li>Sustainable Agriculture Demonstration Farm</li>
                          <li>Community Climate Resilience Planning</li>
                          <li>Zero Waste Initiative</li>
                          <li>Environmental Education for K-12 Schools</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Environmental Stewardship"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Success Story</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-bold">
                          Community Watershed Restoration
                        </h4>
                        <p className="mt-2 text-sm">
                          Our watershed restoration project has engaged over
                          3,000 community volunteers in restoring 15 miles of
                          riparian habitat, significantly improving water
                          quality and wildlife habitat.
                        </p>
                        <Button variant="outline" className="mt-4 w-full">
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent> */}
            {/* </Tabs> */}
          </div>

          {/* Extension Resources */}
          {/* <div className="bg-slate-50 p-6 rounded-lg animate-element">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Extension Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Handshake className="h-5 w-5 text-primary" />
                    Partner With Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Explore opportunities to collaborate with our extension
                    programs on community initiatives.
                  </p>
                  <Button variant="outline" className="w-full">
                    Partnership Opportunities
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Request Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Learn how your organization or community can request
                    extension services and technical assistance.
                  </p>
                  <Button className="w-full">Service Request Form</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Impact Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    View our annual reports and success stories showcasing the
                    impact of our extension programs.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Reports
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div> */}
        </div>
      </AnimatedPage>
    </>
  );
}
