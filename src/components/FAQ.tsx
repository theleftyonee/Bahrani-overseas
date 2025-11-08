
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Behrani Overseas Education provide?",
    answer: "We provide comprehensive education consultancy services including counseling, university selection, application assistance, visa guidance, accommodation arrangements, health insurance support, education loan assistance, and bank account setup for international students."
  },
  {
    question: "How do I choose the right country for my studies?",
    answer: "Choosing the right country depends on various factors including your academic goals, career aspirations, budget, preferred program, language preferences, and post-study work opportunities. Our counselors conduct a detailed profile assessment and guide you to destinations that best match your requirements."
  },
  {
    question: "What is the application process for international universities?",
    answer: "The application process typically involves selecting universities, preparing documents (academic transcripts, statement of purpose, recommendation letters, CV), language proficiency tests, submitting applications, and responding to offers. Our team guides you through each step, ensuring timely and accurate submissions."
  },
  {
    question: "How much does it cost to study abroad?",
    answer: "The cost varies widely depending on the country, city, university, and program. It includes tuition fees, living expenses, health insurance, and travel costs. We provide detailed cost estimates for your chosen destination and help identify scholarship opportunities to reduce expenses."
  },
  {
    question: "What scholarships are available for international students?",
    answer: "Scholarships are offered by universities, governments, and private organizations based on academic merit, financial need, sports excellence, or specific talents. Our counselors help identify relevant scholarships and guide you through the application process to maximize your chances."
  },
  {
    question: "How does the visa process work?",
    answer: "The student visa process varies by country but typically requires an acceptance letter from a university, proof of financial capacity, health insurance, visa application forms, and sometimes interviews. We provide comprehensive visa guidance including document preparation, application review, and interview preparation."
  },
  {
    question: "Do you offer test preparation for IELTS, TOEFL, GRE, etc.?",
    answer: "Yes, we offer specialized coaching for language proficiency tests (IELTS, TOEFL, PTE) and standardized tests (GRE, GMAT, SAT) with experienced trainers, study materials, practice tests, and personalized feedback to help you achieve your target scores."
  },
  {
    question: "What are the accommodation options for international students?",
    answer: "Accommodation options include university dormitories, private student housing, shared apartments, homestays, and private rentals. We help you find suitable options based on your preferences, budget, and proximity to your university."
  },
  {
    question: "Can I work while studying abroad?",
    answer: "Work regulations vary by country. Many popular destinations allow international students to work part-time during studies and full-time during breaks. We provide detailed information about work rights, restrictions, and post-study work opportunities for your chosen destination."
  },
  {
    question: "How do I apply for education loans?",
    answer: "Education loans are available from banks, financial institutions, and sometimes government schemes. We guide you through loan options, eligibility criteria, documentation requirements, and application procedures, connecting you with our banking partners for preferential rates."
  }
];

const FAQ = () => {
  return (
    <section className="py-10 md:py-14 bg-behrani-50" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 text-sm bg-behrani-100 text-behrani-800 rounded-full mb-4">
            Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to the most common questions about studying abroad and our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-behrani-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <p className="text-gray-700 mb-6">
              Still have questions? We're here to help!
            </p>
            <a
              href="#contact"
              className="inline-flex bg-behrani-600 hover:bg-behrani-700 text-white py-3 px-6 rounded-md transition-colors shadow-md"
            >
              Contact Our Counselors
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
