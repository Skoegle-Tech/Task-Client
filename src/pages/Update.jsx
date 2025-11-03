export default function Update() {
  const sheets = [
     { month: "November", url: "https://sheet.zoho.in/sheet/open/8n0y25554ac7456f443608f0793ee1f95ad1a"},
    { month: "October", url: "https://sheet.zoho.in/sheet/open/2tv9c55d98e7511d14a68a84e6a2a4655ef86"},
    { month: "September", url: "https://sheet.zoho.in/sheet/open/tn41m36f24d8b615e41bc8525556d594d258f" },
    { month: "August", url: "https://sheet.zoho.in/sheet/open/n66b30448b72c4fff4b0da322eb2f7ac9418b" },
    { month: "July", url: "https://sheet.zoho.in/sheet/open/bl9yn4d85dc89f61d451d90141a518bb01bfb" },
    { month: "June", url: "https://sheet.zoho.in/sheet/open/budq99de23bd816b2469097c2134986cebea1" },
    { month: "May", url: "https://sheet.zoho.in/sheet/open/j70r8b9d77151a1314d56a29f56a8186672e7" },
    { month: "April", url: "https://sheet.zoho.in/sheet/open/f6jzr694aff497be04d9895c1150ae8f2e176" },
    { month: "March", url: "https://sheet.zoho.in/sheet/open/wk55h9803e344b9024551b379ab34361e8341" },
    { month: "February", url: "https://sheet.zoho.in/sheet/open/sj0wbf8363be3dd7b4af7b5e7429455c56e5a" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <h1 className="text-3xl font-bold mb-4">Update Page</h1>
      <p className="text-lg mb-6 text-center">
        This is where you can update your monthly sheets.
      </p>

      {/* Month Links */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Monthly Sheets</h2>
        <ul className="space-y-2">
          {sheets.map(({ month, url }) => (
            <li key={month}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {month}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
