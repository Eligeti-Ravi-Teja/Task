import React from 'react'

export const Navbar = ({display}) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <h2 class="navbar-brand">Navbar</h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button class="nav-link active" aria-current="page" onClick={display}>Tasks</button>
        </li>
        <li class="nav-item">
        </li>
        <li class="nav-item dropdown">
         
        </li>
        <li class="nav-item">
     </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}