export interface ResponseAuth {
  ok:      boolean;
  message: string;
  token:   string;
}

export interface Device {
  _id?:          string;
  device:        string;
  estado:        string;
  providers:     string;
  co:            string;
  area:          string;
  discoduro?:    string;
  numserie:      string;
  // estado:        ['activo', 'inactivo','mantenimiento'];
  hostname:      string;
  so?:           string;
  ip:            string;
  antivirus?:    string;
  fecha_ingreso: string;
  fecha_baja?:   string;
  ram?:          number;
  descripcion:   string;
  procesador?:   string;
  licencias?:    string;
  precio:        number;
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
