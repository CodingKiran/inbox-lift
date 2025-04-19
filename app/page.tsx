import CoursePreview from "./components/CoursePreview/page";
import EmailCourseLanding from "./components/EmailCourseLanding/page";
import Header from "./components/Header/page";
import Hero from "./components/Hero/page";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <EmailCourseLanding />
        <CoursePreview />
      </main>
    </div>
  );
}
