'use client'

import { useState } from 'react'
import { WireframeCanvas } from '@/components/WireframeCanvas'

type Lang = 'ru' | 'en' | 'zh'

const t: Record<Lang, {
  corp: string; brand: string; nav: string[]; vputi_btn: string; eyebrow: string
  h1a: string; h1b: string; sub: string; cta1: string; cta2: string
  pl_label: string; pl_h: string; div_label: string; div_h: string
  mission_label: string; mission_h: string; mission_p: string
  tech: string[][]; int_label: string; vputi_h: string; vputi_p: string
  vputi_sub: string; open_app: string; apk: string; app_preview: string
  internal: string; footer_loc: string; footer_c: string
  products: string[][]; divisions: string[][]
}> = {
  ru: {
    corp: 'Конгломерат', brand: 'ГИБРИД',
    nav: ['Продукты', 'Подразделения', 'Миссии', 'В Пути'],
    vputi_btn: 'В Пути →',
    eyebrow: 'Конгломерат Гибрид · Осн. 2024',
    h1a: 'Углеродно-нейтральная', h1b: 'робототизированная техника',
    sub: 'От электроджетов и лунных роверов до освоения внеземных ресурсов',
    cta1: 'Продукты', cta2: 'Гибрид В Пути →',
    pl_label: 'ОСНОВА', pl_h: 'Восемь систем.\nОдно виденье',
    div_label: 'Структура', div_h: 'Подразделения',
    mission_label: 'Миссия',
    mission_h: 'Безопасное сосуществование\nчеловека и\nцифрового разума.',
    mission_p: 'Конгломерат Гибрид интегрирует углеродно-нейтральные роботизированные единицы в промышленность и быт — создавая инфраструктуру, где возможности человека расширяются, а не заменяются.',
    tech: [
      ['ПМВ-двигатель', 'Прямоточный магнитно-волноводный двигатель. Быстрый отклик, нулевые выбросы.'],
      ['Орбитальный автопилот', 'Спутниковая группировка для автономной навигации наземных и воздушных средств.'],
      ['Аэрокосмический порт', '64.386°с.ш. 40.710°в.д. — стартовый комплекс для суборбитальных, орбитальных и лунных миссий.'],
    ],
    int_label: 'Внутренняя платформа',
    vputi_h: 'Гибрид\nВ Пути',
    vputi_p: 'Корпоративная транспортная ОС для сотрудников конгломерата. ИИ строит маршрут от двери до двери — такси, рейс, поезд, отель в одном подтверждении.',
    vputi_sub: 'Доступно всем сотрудникам Гибрид. Веб и мобильное приложение.',
    open_app: 'Открыть веб-приложение →', apk: 'Скачать APK · Скоро',
    app_preview: 'Превью приложения', internal: 'Внутреннее',
    footer_loc: '64.386°с.ш. 40.710°в.д. · Архангельская обл.',
    footer_c: '© 2024 Конгломерат Гибрид',
    products: [
      ['01','Электроджет','Авиация','Создание первого поколения летательных аппаратов вертикального взлёта на магнитно-волновых технологиях для пассажирских и грузовых перевозок.'],
      ['02','Лунные миссии','Космос','Разработка транспортных систем, автономной техники и инфраструктуры для постоянного присутствия человека на Луне.'],
      ['03','Космические ресурсы','Орбитальная добыча','Исследование и освоение внеземных ресурсов, включая ароматические углеводороды, редкие металлы и стратегическое сырьё.'],
      ['04','Терразаводы','Производство','Создание автоматизированной сети заводов нового поколения для выпуска транспорта, робототехники и инженерных систем.'],
      ['05','Роботизированная цивилизация','Робототехника','Разработка автономных роботов, бионических систем и интеллектуальных манипуляторов для промышленности, медицины и космоса.'],
      ['06','Энергетическая сеть Гибрид','Энергетика','Развёртывание глобальной инфраструктуры накопления, передачи и распределения энергии для транспорта и промышленных объектов.'],
      ['07','Гибрид В Пути','Логистика','Объединение такси, поездов, авиации, морских и космических маршрутов в единую интеллектуальную систему перемещения.'],
      ['08','Новые среды обитания','Инфраструктура','Создание автономных поселений и систем жизнеобеспечения для Арктики, океана, Луны и будущих внеземных колоний.']
    ],
    divisions: [
      ['01','Аэрокосмическии Линии Гибрид','Космический туризм, лунные миссии, аэрокосмический порт, спутниковая группировка, добычи ароматических углеводородов за пределами Земли.','64.386°с.ш. 40.710°в.д.'],
      ['02','Динамичные Роботы Гибрид','Электроджеты, аддитивные манипуляторы, бионические протезы, лунные роверы, электромаглевы, электроавтобусы, автономные грузовые тягачи.','ПРОИЗВОДСТВО'],
      ['03','Гибрид Разряд','Сеть стационарных и мобильных зарядных станций.','Инфраструктура'],
      ['04','Гибрид Три','Женская команда по триатлону.','Спорт'],
      ['05','Киберспортивная Организация Гибрид','Киберспортивная организация. Академия и про-команды.','Киберспорт'],
    ],
  },
  en: {
    corp: 'Conglomerate', brand: 'HYBRID',
    nav: ['Products', 'Divisions', 'Mission', 'En Route'],
    vputi_btn: 'En Route →',
    eyebrow: 'Hybrid Conglomerate · Est. 2024',
    h1a: 'Carbon-neutral', h1b: 'robotic systems',
    sub: 'From electromagnetic drives to lunar rovers.\nEngineering tomorrow\'s infrastructure today.',
    cta1: 'Products', cta2: 'Hybrid En Route →',
    pl_label: 'Product Line', pl_h: 'Eight systems.\nOne mission.',
    div_label: 'Structure', div_h: 'Divisions',
    mission_label: 'Mission',
    mission_h: 'Safe coexistence\nbetween humans\nand digital intelligence.',
    mission_p: 'Hybrid Conglomerate integrates carbon-neutral robotic units into industry and daily life — building infrastructure where human capability is extended, not replaced.',
    tech: [
      ['PMV Drive', 'Direct-flow magnetic-waveguide motor. Fast response, near-zero emissions.'],
      ['Orbital Autopilot', 'Proprietary satellite constellation enabling autonomous ground and air navigation.'],
      ['Aerospace Port', '64.386°N 40.710°E — launch facility for suborbit, orbit, and lunar missions.'],
    ],
    int_label: 'Internal Platform',
    vputi_h: 'Hybrid\nEn Route',
    vputi_p: 'Corporate travel OS for Hybrid conglomerate employees. AI builds full door-to-door routes — taxi, flight, train, hotel in one confirmation.',
    vputi_sub: 'Available to all Hybrid staff. Web and mobile.',
    open_app: 'Open Web App →', apk: 'Download APK · Soon',
    app_preview: 'App Preview', internal: 'Internal',
    footer_loc: '64.386°N 40.710°E · Arkhangelsk Region',
    footer_c: '© 2024 Hybrid Conglomerate',
    products: [
      ['01','Electrojet','Aviation','Zero-emission aircraft on direct-flow magnetic-waveguide motors.'],
      ['02','Lunar Rover','Space','Electromagnetic-drive robotics for lunar surface exploration.'],
      ['03','Argo Printer','Industry','Industrial additive manufacturing for on-site construction.'],
      ['04','Bionics','MedTech','Electromagnetic-actuated prosthetics with individual calibration.'],
      ['05','Electric Train','Transit','High-speed electromagnetic rail for passenger and cargo.'],
      ['06','Auto Truck','Logistics','Self-piloting electrified freight with satellite autopilot.'],
      ['07','Manipulators','Robotics','High-precision robotic arms for industry and medicine.'],
      ['08','Charge Network','Infrastructure','Stationary and mobile charging for the Hybrid fleet.'],
    ],
    divisions: [
      ['01','Hybrid Aerospace','Electrojet manufacturing, aerospace port, satellite constellation.','64.386°N 40.710°E'],
      ['02','Hybrid Robotics','Manipulators, bionic prosthetics, lunar rovers, additive manufacturing.','R&D Division'],
      ['03','Hybrid Transit','Electric trains, buses, autonomous freight trucks.','Transit Division'],
      ['04','Hybrid Charge','Stationary and mobile charging infrastructure.','Infrastructure'],
      ['05','Hybrid Athletics',"Women's triathlon team.",'Sports Division'],
      ['06','Hybrid Esports','Competitive gaming org. Academy + pro teams.','Esports Division'],
    ],
  },
  zh: {
    corp: '企业集团', brand: 'HYBRID',
    nav: ['产品', '事业部', '使命', '在途'],
    vputi_btn: '在途 →',
    eyebrow: '海布里德集团 · 始于 2024年',
    h1a: '碳中和', h1b: '机器人技术',
    sub: '从电磁发动机到月球车。\n未来基础设施 — 即刻呈现。',
    cta1: '产品', cta2: 'Hybrid 在途 →',
    pl_label: '产品系列', pl_h: '八大系统。\n同一使命。',
    div_label: '组织架构', div_h: '事业部',
    mission_label: '使命',
    mission_h: '人类与数字智能的\n安全共存。',
    mission_p: '海布里德集团 集团致力于将碳中和机器人单元融入工业与日常生活，打造一个人机协作、能力互补而非替代的基础设施。',
    tech: [
      ['PMW 发动机', '直通式磁波导发动机。响应迅速，零排放。'],
      ['轨道自动驾驶', '用于地面和空中交通工具自主导航的卫星星座。'],
      ['航天港', '北纬64.386° 东经40.710° — 亚轨道、轨道及月球任务发射中心。'],
    ],
    int_label: '内部平台',
    vputi_h: '海布里德集团\n在途',
    vputi_p: '专为集团员工打造的内部差旅操作系统。AI实现门到门路线规划 — 出租车、航班、火车、酒店一键确认。',
    vputi_sub: '向所有 海布里德集团 员工开放。提供网页版及移动应用。',
    open_app: '打开网页应用 →', apk: '下载 APK · 即将上线',
    app_preview: '应用预览', internal: '内部使用',
    footer_loc: '北纬64.386° 东经40.710° · 阿尔汉格尔斯克州',
    footer_c: '© 2024 海布里德 集团',
    products: [
      ['01','电动喷气机','航空','采用直通式磁波导发动机的零排放飞机。'],
      ['02','月球车','航天','用于月球表面探测的机器人交通工具。'],
      ['03','Argo 打印机','制造','用于施工现场建筑打印的工业增材制造设备。'],
      ['04','仿生假肢','医疗科技','具备个体校准和高精度的电磁假肢。'],
      ['05','电动列车','交通','用于客运和货运的高速电磁轨道系统。'],
      ['06','电动牵引车','物流','配备 Hybrid 卫星导航的自动驾驶货运牵引车。'],
      ['07','机械臂','机器人','适用于工业和医疗的高精度机械手臂。'],
      ['08','充电网络','基础设施','服务于 海布里德集团 全线车队的固定及移动充电站。'],
    ],
    divisions: [
      ['01','海布里德集团 航空航天','电动喷气机生产、航天港、卫星星座。','北纬64.386°'],
      ['02','海布里德集团 机器人','机械臂、仿生假肢、月球车、增材制造。','研发中心'],
      ['03','海布里德集团 交通','电动列车、公交车、自动驾驶货运牵引车。','交通运输'],
      ['04','海布里德集团 充电','固定及移动充电站网络。','基础设施'],
      ['05','海布里德集团 运动','女子铁人三项队。','体育'],
      ['06','海布里德集团 电竞','电子竞技组织。学院及职业战队。','电子竞技'],
    ],
  },
}

const C: React.CSSProperties = { maxWidth: 1152, margin: '0 auto', padding: '0 48px' }
const teal = '#00D4B4'
const sec: React.CSSProperties = { padding: '120px 0', borderTop: '1px solid #1a1a1a', position: 'relative', zIndex: 1 }

export default function Home() {
  const [lang, setLang] = useState<Lang>('ru')
  const T = t[lang]

  return (
    <main style={{ background: '#080808', color: '#e8e8e8', fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>
      <WireframeCanvas />

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: '1px solid #1a1a1a', background: 'rgba(8,8,8,0.88)', backdropFilter: 'blur(16px)' }}>
        <div style={{ ...C, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: 7, background: teal, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#000', fontSize: 14, flexShrink: 0 }}>H</div>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ color: '#505050', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' as const }}>{T.corp}</div>
              <div style={{ color: '#fff', fontSize: 12, fontWeight: 600, letterSpacing: '0.2em' }}>{T.brand}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 36 }}>
            {T.nav.map((label, i) => (
              <a key={i} href={['#products','#divisions','#mission','#vputi'][i]}
                style={{ color: '#606060', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' as const, textDecoration: 'none' }}>
                {label}
              </a>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', gap: 2, background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: 8, padding: 3 }}>
              {(['ru','en','zh'] as Lang[]).map(l => (
                <button key={l} onClick={() => setLang(l)}
                  style={{ padding: '4px 10px', borderRadius: 5, border: 'none', cursor: 'pointer', fontSize: 11, fontWeight: lang === l ? 700 : 400, background: lang === l ? teal : 'transparent', color: lang === l ? '#000' : '#606060', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
                  {l}
                </button>
              ))}
            </div>
            <a href="https://hybrid-away.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 11, padding: '8px 18px', borderRadius: 6, border: `1px solid ${teal}`, color: teal, textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' as const, whiteSpace: 'nowrap' as const }}>
              {T.vputi_btn}
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' as const, padding: '0 48px', position: 'relative', zIndex: 1 }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 240, background: 'linear-gradient(to bottom, transparent, #080808)', zIndex: 2, pointerEvents: 'none' as const }} />
        <div style={{ position: 'relative', zIndex: 3, maxWidth: 760 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 40 }}>
            <div style={{ height: 1, width: 48, background: teal }} />
            <span style={{ color: teal, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase' as const, fontWeight: 300 }}>{T.eyebrow}</span>
            <div style={{ height: 1, width: 48, background: teal }} />
          </div>
          <h1 style={{ fontSize: 'clamp(42px, 6vw, 76px)', fontWeight: 200, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 28 }}>
            {T.h1a}<br /><span style={{ color: teal, fontWeight: 300 }}>{T.h1b}</span>
          </h1>
          <p style={{ color: '#707070', fontSize: 16, fontWeight: 300, lineHeight: 1.8, maxWidth: 480, margin: '0 auto 48px', whiteSpace: 'pre-line' as const }}>{T.sub}</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <a href="#products" style={{ padding: '13px 36px', background: '#fff', color: '#000', borderRadius: 6, fontSize: 13, fontWeight: 500, textDecoration: 'none' }}>{T.cta1}</a>
            <a href="https://hybrid-away.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ padding: '13px 36px', border: '1px solid #2a2a2a', color: '#707070', borderRadius: 6, fontSize: 13, fontWeight: 300, textDecoration: 'none' }}>{T.cta2}</a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={sec}>
        <div style={C}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ color: teal, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase' as const, marginBottom: 16 }}>{T.pl_label}</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 200, color: '#fff', whiteSpace: 'pre-line' as const }}>{T.pl_h}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: '#1a1a1a' }}>
            {T.products.map(([num, name, tag, desc]) => (
              <div key={num} style={{ background: '#080808', padding: '28px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <span style={{ color: '#303030', fontSize: 11, fontFamily: 'monospace' }}>{num}</span>
                  <span style={{ color: '#404040', fontSize: 10, border: '1px solid #1a1a1a', padding: '2px 8px', borderRadius: 20, textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>{tag}</span>
                </div>
                <div style={{ width: '100%', height: 110, background: '#0a0a0a', border: '1px solid #141414', borderRadius: 6, marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#1e1e1e', fontSize: 11, fontFamily: 'monospace' }}>[ image ]</span>
                </div>
                <div style={{ color: '#e0e0e0', fontSize: 13, fontWeight: 400, marginBottom: 8 }}>{name}</div>
                <div style={{ color: '#585858', fontSize: 12, lineHeight: 1.65, fontWeight: 300 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section id="divisions" style={sec}>
        <div style={C}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ color: teal, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase' as const, marginBottom: 16 }}>{T.div_label}</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 200, color: '#fff' }}>{T.div_h}</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 1, background: '#1a1a1a' }}>
            {T.divisions.map(([num, name, desc, loc]) => (
              <div key={num} style={{ background: '#080808', padding: '20px 28px', display: 'flex', alignItems: 'center', gap: 24 }}>
                <span style={{ color: '#303030', fontSize: 11, fontFamily: 'monospace', width: 28, flexShrink: 0 }}>{num}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: '#e0e0e0', fontSize: 13, fontWeight: 400, marginBottom: 3 }}>{name}</div>
                  <div style={{ color: '#585858', fontSize: 12, fontWeight: 300 }}>{desc}</div>
                </div>
                <div style={{ color: '#383838', fontSize: 10, fontFamily: 'monospace', textAlign: 'right' as const, flexShrink: 0 }}>{loc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" style={sec}>
        <div style={{ ...C, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div style={{ color: teal, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase' as const, marginBottom: 32 }}>{T.mission_label}</div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 200, color: '#fff', lineHeight: 1.35, whiteSpace: 'pre-line' as const }}>{T.mission_h}</h2>
          </div>
          <div style={{ paddingTop: 56 }}>
            <p style={{ color: '#585858', fontSize: 13, fontWeight: 300, lineHeight: 1.9, marginBottom: 36 }}>{T.mission_p}</p>
            {T.tech.map(([title, desc]) => (
              <div key={title} style={{ borderLeft: '2px solid #1a1a1a', paddingLeft: 16, marginBottom: 24 }}>
                <div style={{ color: '#e0e0e0', fontSize: 12, fontWeight: 500, marginBottom: 4 }}>{title}</div>
                <div style={{ color: '#585858', fontSize: 12, fontWeight: 300, lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* В ПУТИ */}
      <section id="vputi" style={sec}>
        <div style={{ ...C, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ color: teal, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase' as const, marginBottom: 32 }}>{T.int_label}</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 200, color: '#fff', marginBottom: 24, lineHeight: 1.15 }}>
              {T.vputi_h.split('\n')[0]}<br /><span style={{ color: teal }}>{T.vputi_h.split('\n')[1]}</span>
            </h2>
            <p style={{ color: '#585858', fontSize: 13, fontWeight: 300, lineHeight: 1.9, marginBottom: 8 }}>{T.vputi_p}</p>
            <p style={{ color: '#383838', fontSize: 12, fontWeight: 300, lineHeight: 1.8, marginBottom: 40 }}>{T.vputi_sub}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
              <a href="https://hybrid-away.vercel.app" target="_blank" rel="noopener noreferrer"
                style={{ padding: '13px 28px', background: teal, color: '#000', borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>{T.open_app}</a>
              <button disabled style={{ padding: '13px 28px', border: '1px solid #1a1a1a', color: '#383838', borderRadius: 6, fontSize: 13, background: 'transparent', cursor: 'not-allowed', fontWeight: 300 }}>{T.apk}</button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' as const }}>
            <div style={{ width: 220, aspectRatio: '9/16', background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' as const }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: teal, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, color: '#000', margin: '0 auto 12px' }}>H</div>
                <div style={{ color: '#fff', fontSize: 14, fontWeight: 300 }}>В Пути</div>
                <div style={{ color: '#383838', fontSize: 11, marginTop: 6 }}>{T.app_preview}</div>
              </div>
            </div>
            <div style={{ position: 'absolute' as const, top: -12, right: 24, padding: '5px 12px', borderRadius: 20, background: '#0a0a0a', border: `1px solid ${teal}`, color: teal, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
              {T.internal}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #1a1a1a', padding: '40px 0', position: 'relative', zIndex: 1 }}>
        <div style={{ ...C, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 20, height: 20, borderRadius: 4, background: teal, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#000', fontSize: 11 }}>H</div>
            <div>
              <div style={{ color: '#303030', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>{T.corp}</div>
              <div style={{ color: '#484848', fontSize: 11, letterSpacing: '0.15em' }}>{T.brand}</div>
            </div>
          </div>
          <div style={{ color: '#383838', fontSize: 11, fontFamily: 'monospace' }}>{T.footer_loc}</div>
          <div style={{ color: '#383838', fontSize: 11, fontWeight: 300 }}>{T.footer_c}</div>
        </div>
      </footer>
    </main>
  )
}
