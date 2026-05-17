import {Header} from "@/components/header";
import {Hero} from "@/components/hero";
import {
    CollaborationSection,
    ContactSection,
    Footer,
    ImpactSection,
    MethodSection,
    OperatingSection,
    PostsSection,
    PrinciplesSection,
    ProjectsSection,
    ServicesSection
} from "@/components/sections";
import {getLatestPosts} from "@/lib/posts";

export default function HomePage() {
    const latestPosts = getLatestPosts(3);
    return (
        <main className="min-h-screen bg-white text-ink">
            <Header/>
            <Hero/>
            <ServicesSection/>
            <ImpactSection/>
            <OperatingSection/>
            <ProjectsSection/>
            <MethodSection/>
            <PrinciplesSection/>
            <PostsSection posts={latestPosts} />
            <CollaborationSection/>
            <ContactSection/>
            <Footer/>
        </main>
    );
}
