
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#f5f5f5",
      fontFamily: "Arial",
      textAlign: "center"
    }}>
      <header style={{
        background: "#131921",
        color: "white",
        padding: "25px"
      }}>
        <h1>ALVERZA</h1>
        <p>Alış-verişin yeni ünvanı</p>
      </header>

      <h2 style={{ marginTop: "60px" }}>
        ALVERZA-ya xoş gəlmisiniz!
      </h2>

      <p>Minlərlə məhsul, bir platformada.</p>

      <button style={{
        background: "#ff9900",
        border: "none",
        padding: "15px 30px",
        borderRadius: "6px",
        fontSize: "18px"
      }}>
        Alış-verişə başla
      </button>
    </main>
  );
}
