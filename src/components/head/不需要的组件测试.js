<span className="mt-2 mt-md-0">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <span className="nav-link">{userinfo.nickname}</span>
    </li>
    <li className="nav-item">
      <span className="nav-link">个人中心</span>
    </li>

    <li className="nav-item">
      <a className="nav-link" href="javascript:void(0)" onClick={this.signOut}>退出</a>
    </li>
  </ul>
</span>





          <span className="mt-2 mt-md-0">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <span className="nav-link">{userinfo.nickname}</span>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)" onClick={this.signOut}>退出</a>
              </li>
            </ul>
          </span>

        </div>
      </nav>
    </header>


modalVisible

<div  className="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
        </div>
