import React from "react";
import LessonCard from "../LessonCard/page";

const CoursePreview = () => {
  return (
    <section
      id="course-preview"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What You&apos;ll Learn
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            In just 5 days, you&apos;ll discover the strategic blind spots
            costing your SaaS business growth and revenue.
          </p>
        </div>
        <LessonCard />
      </div>
    </section>
  );
};

export default CoursePreview;
