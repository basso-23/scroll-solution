export default function Home() {
  return (
    <div className="main_container">
      {/* WRAPPER */}
      <div className="section_wrapper1">
        {/* Header fijo con altura fija de 100px */}
        <div className="header_fixed">HEADER FIJO - 100px</div>

        {/* Contenedor scrollable que ocupa el espacio restante */}
        <div className="scrollable_container">
          <div className="scrollable_item">Item 1</div>
          <div className="scrollable_item">Item 2</div>
          <div className="scrollable_item">Item 3</div>
          <div className="scrollable_item">Item 4</div>
          <div className="scrollable_item">Item 5</div>
          <div className="scrollable_item">Item 6</div>
          <div className="scrollable_item">Item 7</div>
          <div className="scrollable_item">Item 8</div>
          <div className="scrollable_item">Item 9</div>
          <div className="scrollable_item">Item 10</div>
          <div className="scrollable_item">Item 11</div>
          <div className="scrollable_item">Item 12</div>
          <div className="scrollable_item">Item 13</div>
          <div className="scrollable_item">Item 14</div>
          <div className="scrollable_item">Item 15</div>
          <div className="scrollable_item">Item 16</div>
          <div className="scrollable_item">Item 17</div>
          <div className="scrollable_item">Item 18</div>
          <div className="scrollable_item">Item 19</div>
          <div className="scrollable_item">Item 20</div>
        </div>

        {/* Footer fijo con altura fija de 100px */}
        <div className="footer_fixed">FOOTER FIJO - 100px</div>
      </div>
    </div>
  );
}
