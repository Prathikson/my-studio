// import type { CardData } from "../components/CardMarquee";
// import CardMarquee from "../components/CardMarquee";



// const ExampleCardMarquee = () => {
//   const sampleCards: CardData[] = [
//     {
//       id: 1,
//       title: "GA4 setup and integration",
//       subtitle: "PREVIOUSLY PURCHASED",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
//       badge: "Nike AirForce 1",
//       color: "linear-gradient(135deg, #1f1f1f 0%, #3a3a3a 100%)",
//       chart: "line"
//     },
//     {
//       id: 2,
//       title: "Tagging and tracking",
//       stats: { value: "37", trend: "up" },
//       chart: "triangles",
//       color: "linear-gradient(135deg, #f6d55c 0%, #ed5564 50%, #a8e6cf 100%)",
//     },
//     {
//       id: 3,
//       title: "Measurement planning",
//       subtitle: "From setting up Google Analytics to tracking performance trends",
//       description: "managing complex site migrations, and leading content marketing campaigns - we do it all. We turn data into action, translating performance into clear KPIs and benchmarks that actually mean something.",
//       color: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
//     },
//     {
//       id: 4,
//       title: "Ongoing analytics management & optimisation",
//       stats: { value: "+2415%", label: "Growth", trend: "up" },
//       color: "linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",
//     },
//     {
//       id: 5,
//       title: "Data Visualization",
//       chart: "dots",
//       stats: { value: "124", label: "Active Users" },
//       color: "linear-gradient(135deg, #16a085 0%, #27ae60 100%)",
//     },
//     {
//       id: 6,
//       title: "Performance Monitoring",
//       subtitle: "Real-time insights",
//       stats: { value: "98.5%", label: "Uptime", trend: "up" },
//       color: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 py-20">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold text-white text-center mb-12">
//           Interactive Card Marquee
//         </h1>
        
//         <CardMarquee
//           cards={sampleCards}
//           dragEnabled={true}
//           cardWidth={320}
//           gap={24}
//           className="mb-8"
//           showControls={true}
//         />
        
//         <div className="text-center">
//           <p className="text-white/70 max-w-2xl mx-auto">
//             Hover to pause, drag to control, and enjoy the smooth animations. 
//             Each card is interactive with hover effects and smooth transitions.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExampleCardMarquee;