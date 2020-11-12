import logo from './logo.svg';
import './App.css';





function App() {
  return (
    <div className="App">
      
      <header className="App-header">
   
        <p>
        macro inv
        </p>

        <nav>
<ul class="nav">
<li><a href= "" >Inventarios</a>
<ul class="submenu">
<li><a href="">Alta de Material</a>
</li>
<li><a href="">Baja de Material</a>
</li>
<li><a href="">Acomodo de Material</a>
</li>
</ul>

</li>
<li><a href="" >Finanzas</a>
<ul class="submenu">
<li><a href="">Clientes</a>
</li>

<li><a href="">Proveedores</a>
</li>
<li><a href="">Descuentos</a>
</li>

</ul>


</li>
<li><a href="" >Usuarios</a>
<ul class="submenu">
<li><a href="">Clave y Contraseña</a>
</li>
<li><a href="">Numero de usuario</a>
</li>
<li><a href="">Movimiento Registrado</a>
</li>

</ul>


</li>
<li><a href="" >Exportar</a>
<ul class="submenu">
<li><a href="">Exportar a Excel</a>
</li>
<li><a href="">Exportar a PDF</a>
</li>
</ul>




</li>
<li><a href="" >Facturacion</a>
<ul class="submenu">
<li><a href="">Desea Facturar?</a>
</li>
<li><a href="">Cancelar Factura</a>
</li>
<li><a href="">Facturar en Dolares</a>
</li>
</ul>






</li>
</ul>
</nav>
        
      
      </header>
    </div>
  );
}

export default App;