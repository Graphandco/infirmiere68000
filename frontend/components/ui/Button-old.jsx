export default function Button({ children }) {
   return (
      <button className="bg-white text-black px-4 py-2 rounded-full cursor-pointer hover:bg-white/70 transition-all duration-100">
         {children}
      </button>
   );
}
