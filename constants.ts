import { NavItem, ProjectItem, ServiceItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'PROJECTS', href: '/projects' },
  { label: 'SERVICES', href: '/services' },
  { label: 'ABOUT', href: '/about' },
  { label: 'JOURNAL', href: '/journal' },
  { label: 'CONTACT', href: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    titleZh: '全方位室內設計',
    titleEn: 'Full Service Design',
    description: '從概念到完工，我們提供完整的設計規劃與工程管理，確保每個細節都符合您的生活需求。',
    imageUrl: 'https://picsum.photos/id/1070/800/1200'
  },
  {
    id: 's2',
    titleZh: '軟裝陳設與風格',
    titleEn: 'Furnishing & Styling',
    description: '透過家具、燈飾與藝術品的精選搭配，為現有空間注入新的靈魂與氛圍。',
    imageUrl: 'https://picsum.photos/id/437/800/1200'
  },
  {
    id: 's3',
    titleZh: '線上諮詢服務',
    titleEn: 'Virtual Consultations',
    description: '針對特定空間的改造建議，提供靈活且專業的設計諮詢與配置方案。',
    imageUrl: 'https://picsum.photos/id/678/800/1200'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: '新秘｜個性 ‧ 吾宅',
    category: 'Residential',
    imageUrl: 'https://docs.google.com/drawings/d/e/2PACX-1vT1wM0KoFHHXYuYfU1fI6zNglGJS0n2Jrfc79ZzE6YG_4tfKGriLny4t-kNMtF7n-XclHMYaWQS1eBW/pub?w=960&h=720',
    location: 'Taipei, Taiwan',
    architect: 'Stillspace Design',
    construction: 'BuildRite Co.',
    photographer: 'Shao-Hui Wang',
    description: '在這個繁忙的都市叢林中，我們試圖為居住者創造一片淨土。設計核心圍繞著「減法」哲學，去除多餘的裝飾，讓光線與材質成為空間的主角。大面積的留白不僅放大了空間感，更讓居住者的心靈得以沈澱。原木的溫潤與石材的冷冽在空間中對話，交織出既現代又充滿溫度的生活場景。',
    moreImages: [
      'https://picsum.photos/id/16/800/1200',
      'https://picsum.photos/id/18/800/1200'
    ]
  },
  {
    id: 'p2',
    title: '日日清安',
    category: 'Residential',
    imageUrl: 'https://docs.google.com/drawings/d/e/2PACX-1vQCx78fme6A_0A2wMbfgfINMLHyg9-vYpxBVRUFmDhj6Q8bSTJEY5BqaDbNxGrjkPMdsXr9y8lRYJ55/pub?w=960&h=720',
    location: 'New York, USA',
    architect: 'Urban Architects',
    construction: 'Metro Build',
    photographer: 'John Doe',
    description: '位於第三大道的這處寓所，融合了經典美式風格與現代極簡主義。我們保留了原有的紅磚牆面結構，並以現代的鋼構與玻璃元素進行對比。開放式的廚房與客廳設計，促進了家人的互動。深色的胡桃木地板與淺色的牆面形成強烈對比，展現出都會生活的俐落與優雅。',
    moreImages: [
      'https://picsum.photos/id/293/800/1200',
      'https://picsum.photos/id/294/800/1200'
    ]
  },
  {
    id: 'p3',
    title: '復刻｜小時光',
    category: 'Residential',
    imageUrl: 'https://docs.google.com/drawings/d/e/2PACX-1vQcpk46LVc-INsEcggYFKahvxPd-TB4W5Vy-y3fZ_D14rybHqODWTnfwkCU1hEc-lLSibq0PpliZSV8/pub?w=960&h=720',
    location: 'Yilan, Taiwan',
    architect: 'Stillspace Design',
    construction: 'Local Craftsmen',
    photographer: 'Yi-Chen Lin',
    description: '坐落於河畔的度假別墅，設計靈感來自於周圍的自然景觀。大面落地窗將戶外的河景與山色引入室內，模糊了室內外的界線。室內選用大量的天然材質，如棉麻、藤編與原木，營造出放鬆愜意的度假氛圍。每一個角落都經過精心佈置，讓居住者能在此享受與自然共處的時光。',
    moreImages: [
      'https://picsum.photos/id/112/800/1200',
      'https://picsum.photos/id/113/800/1200'
    ]
  },
  {
    id: 'p4',
    title: '藍光映夜｜都會工業宅',
    category: 'Residential',
    imageUrl: 'https://docs.google.com/drawings/d/e/2PACX-1vT1aRu0vHEwAX7qGW4XbBCE7iqnBjqFz57SjeXODIc6Ca_lzEmKzbuA99JsTtKXMWO0iPqkJrQAI0UL/pub?w=960&h=720',
    location: 'Taichung, Taiwan',
    architect: 'Stillspace Design',
    construction: 'Elite Construction',
    photographer: 'Wei-Hao Chen',
    description: '這是一個關於光與影的實驗。透過特殊設計的格柵與窗戶，陽光隨著時間推移在室內投射出不同的光影變化。深色的橡木家具沈穩而內斂，與淺灰色的藝術塗料牆面相得益彰。這不僅是一個居住的場所，更是一個可以靜心思考的藝術空間。',
    moreImages: [
      'https://picsum.photos/id/13/800/1200',
      'https://picsum.photos/id/14/800/1200'
    ]
  }
];

export const JOURNAL_POSTS: import('./types').JournalPost[] = [
  {
    id: 'j1',
    title: '回歸純粹：極簡主義在現代居家設計中的實踐',
    date: 'OCTOBER 24, 2025',
    category: 'Design Trends',
    excerpt: '極簡主義不僅是一種設計風格，更是一種生活態度。探討如何透過減法設計，創造出寧靜而富有深度的居住空間。',
    imageUrl: 'https://picsum.photos/id/42/800/600',
    content: `
      <p>在資訊爆炸的現代社會，家成為了我們尋求平靜的避風港。極簡主義（Minimalism）的興起，正是回應了人們對於簡單、純粹生活的渴望。它不只是關於「少」，更是關於「精」。</p>
      
      <h3>減法設計的哲學</h3>
      <p>極簡設計的核心在於「減法」。去除多餘的裝飾線條，簡化空間的色彩配置，讓視覺回歸到空間的本質——結構、光影與材質。透過大面積的留白，讓空間「呼吸」，也讓居住者的心靈得以沈澱。</p>

      <h3>材質與細節的對話</h3>
      <p>當色彩被簡化後，材質的質感就變得尤為重要。溫潤的木地板、冷冽的清水模、粗獷的石材，這些自然材質的紋理在光線的照射下，展現出豐富的層次感。極簡並非空無一物，而是對每一個細節的極致追求。</p>

      <h3>收納的藝術</h3>
      <p>要維持極簡的視覺效果，強大的收納機能是不可或缺的。我們傾向使用隱藏式收納設計，將櫃體與牆面整合，讓雜物「消失」在視線中，只留下最心愛的物件與藝術品，讓生活空間保持整潔與秩序。</p>
    `
  },
  {
    id: 'j2',
    title: '光影敘事：如何運用燈光營造空間氛圍',
    date: 'SEPTEMBER 15, 2025',
    category: 'Interior Tips',
    excerpt: '光線是空間的靈魂。正確的燈光配置不僅能改變空間的視覺感受，更能影響居住者的情緒與生活品質。',
    imageUrl: 'https://picsum.photos/id/56/800/600',
    content: `
      <p>光，是室內設計中最重要的元素之一。它不僅提供照明功能，更是營造氛圍、引導視線、界定空間的關鍵。一個好的燈光設計，能讓同一個空間在不同時間展現出截然不同的面貌。</p>

      <h3>色溫的魔法</h3>
      <p>色溫（Color Temperature）決定了光的顏色。低色溫（2700K-3000K）的暖黃光能營造溫馨、放鬆的氛圍，適合客廳與臥室；高色溫（4000K-5000K）的白光則能提高專注力，適合書房與廚房工作區。靈活運用不同色溫，能滿足不同生活場景的需求。</p>

      <h3>層次照明的運用</h3>
      <p>避免使用單一主燈照亮整個房間，那會讓空間顯得平淡無奇。我們建議採用「層次照明」：
      <br/>1. <strong>環境照明（Ambient Lighting）</strong>：提供基礎亮度，如嵌燈、間接照明。
      <br/>2. <strong>重點照明（Accent Lighting）</strong>：強調特定物件，如投射燈照亮畫作或植栽。
      <br/>3. <strong>功能照明（Task Lighting）</strong>：滿足特定工作需求，如閱讀燈、流理台燈。</p>

      <h3>自然光的引入</h3>
      <p>除了人工照明，自然光更是無可取代的恩賜。透過窗簾的調節、鏡面的反射，將自然光引入室內深處，讓光影隨著時間推移而變化，賦予空間動態的生命力。</p>
    `
  },
  {
    id: 'j3',
    title: '觸感的溫度：自然材質在室內設計中的運用',
    date: 'AUGUST 08, 2025',
    category: 'Materiality',
    excerpt: '在科技冷冽的時代，我們渴望回歸自然的懷抱。深入了解原木、石材與特殊塗料的特性，為家增添溫潤的觸感。',
    imageUrl: 'https://picsum.photos/id/250/800/600',
    content: `
      <p>在充滿光滑螢幕與冰冷金屬的現代生活中，我們對於「觸感」的渴望愈發強烈。在室內設計中運用自然材質，不僅是為了視覺的美感，更是為了喚醒我們對自然的原始記憶，帶來心理上的撫慰。</p>

      <h3>木材：溫暖的擁抱</h3>
      <p>木材是最具親和力的材質。從深沈的胡桃木到清新的橡木，不同樹種的紋理與色澤，能為空間帶來不同的個性。實木地板的腳感、木質家具的溫潤，都能讓家充滿溫度。我們特別喜愛保留木材的天然節眼與瑕疵，那是生命留下的痕跡。</p>

      <h3>石材：時間的沈澱</h3>
      <p>大理石的優雅、花崗岩的堅硬、板岩的粗獷，石材是大自然經過億萬年淬鍊的藝術品。在玄關、電視牆或中島檯面運用石材，能為空間增添沈穩與大器的質感。石材的冰涼觸感在炎熱的夏季，也能帶來一絲清涼。</p>

      <h3>特殊塗料：手作的痕跡</h3>
      <p>近年來，礦物塗料、藝術塗料大受歡迎。它們不同於一般油漆的平整，而是帶有手作的鏝刀痕跡與自然的色澤變化。這種不完美的完美（Wabi-Sabi），讓牆面不再只是背景，而成為空間中富有表情的主角。</p>
    `
  }
];