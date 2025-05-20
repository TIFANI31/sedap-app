import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8">
            {frameworkData.map((item) => ( //panggil dulu datanya apa
                <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-blue-400 hover:text-blue-700">{item.details.developer}</p>

                    {item.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                            {tag}
                        </span>
                    ))}

                </div>
            ))}
        </div>
    )
}




// items.detail.officialWebsite
// items.detail.developer
























//output jsonnnya array dulu karna dia [, kalau kurung kurawal { dia objek

// pastikan ada key biartidak error dan menjadi unik key