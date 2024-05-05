import './assets/main.css'

import { createApp } from 'vue'
// 싱글 파일 컴포넌트에서 최상위 컴포넌트 앱을 가져온다.
import App from './App.vue'

// 앱 마운트
// 앱 인스턴스는 .mount() 메서드가 호출될 때까지 아무것도 렌더링하지 않는다.
createApp(App).mount('#app') 
