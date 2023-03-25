export interface ResponseAuth {
  ok:      boolean;
  message: string;
  token:   string;
}

export interface Device {
  _id?:           string;
  ip:             string;
  hostname:       string;
  device:         string;
  descripcion?:    string;
  area:           string;
  co:             string;
  precio:         number;
  providers:      string;
  numserie:       string;
  fecha_ingreso:  string;
  estado:         string;
  fecha_baja?:    string;
  discoduro?:     string;
  ram?:           any;
  procesador?:    string;
  so?:            string;
  antivirus?:     string;
  licencias?:     string;
  usuario?:       string;
  userAdmin?:     UserAdmin;
}

export interface ResponseTrue {
  data:    Device[];
  ok:      boolean,
  message: string
}

export interface ResponseData {
  data:    Device;
  ok:      boolean,
  message: string
}


export interface User {
  name:       string;
  lastname:   string;
  email:      string;
  role?:      string[];
  password?:  string;
}

export interface UserAdmin {
  _id:        string;
  name:       string;
  lastname:   string;
  email:      string;
  password:   string;
  role?:      string[];
}
