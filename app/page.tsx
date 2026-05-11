export default function Page() {
  const grants = [
    {
      title: "Fotovoltaika pro firmy",
      supportRate: "Až 65 %",
      amount: "Až 3 mil. Kč",
      status: "Aktivní",
    },
    {
      title: "Rekonstrukce bytových domů",
      supportRate: "Až 40 %",
      amount: "Až 12 mil. Kč",
      status: "Brzy končí",
    },
    {
      title: "Úspory energie",
      supportRate: "Až 60 %",
      amount: "Až 8 mil. Kč",
      status: "Aktivní",
    },
  ];

  return (
    <main style={{ fontFamily: "sans-serif", padding: 40, maxWidth: 1100, margin: "0 auto" }}>
      <header style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 40, margin: 0 }}>
          Evropský projekt <span style={{ color: "#2563eb" }}>.</span>
        </h1>
        <p style={{ color: "#666", fontSize: 18 }}>
          Aktuální dotační příležitosti pro firmy a obce
        </p>
      </header>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 20 }}>
        {grants.map((g) => (
          <div key={g.title} style={{ border: "1px solid #eee", borderRadius: 16, padding: 20 }}>
            <div style={{ fontSize: 12, color: "#2563eb", marginBottom: 10 }}>
              {g.status}
            </div>

            <div style={{ fontSize: 20, fontWeight: "bold" }}>{g.title}</div>

            <div style={{ marginTop: 10, color: "#555" }}>
              <div>{g.amount}</div>
              <div>{g.supportRate}</div>
            </div>

            <button style={{
              marginTop: 15,
              width: "100%",
              padding: 10,
              borderRadius: 10,
              border: "none",
              background: "#2563eb",
              color: "white",
              cursor: "pointer"
            }}>
              Detail
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
