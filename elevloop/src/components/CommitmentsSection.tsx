"use-client"
import commitments from "../data/commitments";



const Commitments = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Commitments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your success is our priority. Here&apos;s what you can expect when working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((commitment: { title: string; description: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }, index: number) => {
                const IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>> = commitment.icon;
                return (
                  <div key={index} className="text-center group">
                  <div className="bg-blue-100 p-6 rounded-full w-fit mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-10 h-10 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{commitment.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{commitment.description}</p>
                  </div>
                );
                })}
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Your Project, Our Promise
          </h3>
          <p className="text-blue-800 text-lg max-w-3xl mx-auto">
            We stand behind every project with ironclad guarantees, transparent communication, 
            and unwavering commitment to your success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Commitments;