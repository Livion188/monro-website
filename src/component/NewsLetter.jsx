function NewsLetter() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-3">Don't miss a drop👀</h2>
      <p className="text-gray-600 mb-6">
        Be the first to know about new arrivals, exclusive deals, and everything
        happening at Monro
      </p>
      <div className="flex justify-center gap-2">
     <input type="email"
     placeholder="livvion70@gmail.com"
     className="border px-4 py-3 rounded-lg "
     />
     <button className="bg-mist-900 text-white rounded-lg px-6 py-3"><a href="https://www.shopmonroe.com.au/"></a>JOIN US</button>
      </div>
    </div>
  );
}

export default NewsLetter;
