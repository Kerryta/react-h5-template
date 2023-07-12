import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import { ConfigProvider } from "antd-mobile"
import zhCN from "antd-mobile/es/locales/zh-CN"
import "./reset.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
