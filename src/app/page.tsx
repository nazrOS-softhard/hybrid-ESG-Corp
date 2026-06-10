'use client'

import { useState, useEffect, useRef } from 'react'

type Lang = 'ru' | 'en' | 'zh'

const t = {
  ru: {
    corp: 'Конгломерат',
    brand: 'ГИБРИД',
    nav: ['Продукты', 'Подразделения', 'Миссия', 'В Пути'],
    vputi_btn: 'В Пути →',
    eyebrow: 'Конгломерат Гибрид · Осн. 2024',
    h1a: 'Углеродно-нейтральная',
    h1b: 'робототехника',
    sub: 'От электромагнитных двигателей до лунных роверов.\nИнфраструктура будущего — сегодня.',
    cta1: 'Продукты',
    cta2: 'Гибрид В Пути →',
    pl_label: 'Линейка продуктов',
    pl_h: 'Восемь систем.\nОдна миссия.',
    div_label: 'Структура',
    div_h: 'Подразделения',
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
    open_app: 'Открыть веб-приложение →',
    apk: 'Скачать APK · Скоро',
    app_preview: 'Превью приложения',
    internal: 'Внутреннее',
    footer_loc: '64.386°с.ш. 40.710°в.д. · Архангельская обл.',
    footer_c: '© 2024 Конгломерат Гибрид',
    products: [
      ['01','Электроджет','Авиация','Самолёт с нулевыми выбросами на прямоточных магнитно-волноводных двигателях.'],
      ['02','Лунный ровер','Космос','Роботизированные транспортные средства для исследования лунной поверхности.'],
      ['03','Принтер Арго','Производство','Промышленная аддитивная установка для печати зданий на месте возведения.'],
      ['04','Бионика','МедТех','Электромагнитные протезы с индивидуальной калибровкой и высокой точностью.'],
      ['05','Электропоезд','Транспорт','Высокоскоростные электромагнитные рельсовые системы для пассажиров и грузов.'],
      ['06','Электротягач','Логистика','Автопилотируемые грузовые тягачи со спутниковой навигацией Гибрид.'],
      ['07','Манипуляторы','Робототехника','Высокоточные роботизированные руки для промышленности и медицины.'],
      ['08','Сеть зарядок','Инфраструктура','Стационарные и мобильные зарядные станции для всего флота Гибрид.'],
    ],
    divisions: [
      ['01','Гибрид Aerospace','Производство электроджетов, аэрокосмический порт, спутниковая группировка.','64.386°с.ш. 40.710°в.д.'],
      ['02','Гибрид Robotics','Манипуляторы, бионические протезы, лунные роверы, аддитивное производство.','НИОКР'],
      ['03','Гибрид Transit','Электропоезда, автобусы, автономные грузовые тягачи.','Транспорт'],
      ['04','Гибрид Charge','Сеть стационарных и мобильных зарядных станций.','Инфраструктура'],
      ['05','Гибрид Athletics','Женская команда по триатлону.','Спорт'],
      ['06','Гибрид Esports','Киберспортивная организация. Академия и про-команды.','Киберспорт'],
    ],
  },
  en: {
    corp: 'Conglomerate',
    brand: 'HYBRID',
    nav: ['Products', 'Divisions', 'Mission', 'En Route'],
    vputi_btn: 'En Route →',
    eyebrow: 'Hybrid Conglomerate · Est. 2024',
    h1a: 'Carbon-neutral',
    h1b: 'robotic systems',
    sub: 'From electromagnetic drives to lunar rovers.\nEngineering tomorrow\'s infrastructure today.',
    cta1: 'Our Products',
    cta2: 'Hybrid En Route →',
    pl_label: 'Product Line',
    pl_h: 'Eight systems.\nOne mission.',
    div_label: 'Structure',
    div_h: 'Divisions',
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
    vputi_p: 'Corporate travel OS for conglomerate employees. AI builds full door-to-door routes — taxi, flight, train, hotel in one confirmation.',
    vputi_sub: 'Available to all Hybrid staff. Web and mobile.',
    open_app: 'Open Web App →',
    apk: 'Download APK · Soon',
    app_preview: 'App Preview',
    internal: 'Internal',
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
    corp: '集团',
    brand: '混血',
    nav: ['产品', '部门', '使命', '途中'],
    vputi_btn: '途中 →',
    eyebrow: '混血集团 · 成立于 2024',
    h1a: '碳中和',
    h1b: '机器人系统',
    sub: '从电磁驱动到月球探测车。\n今天构建明天的基础设施。',
    cta1: '我们的产品',
    cta2: '混血 途中 →',
    pl_label: '产品线',
    pl_h: '八大系统。\n一个使命。',
    div_label: '结构',
    div_h: '部门',
    mission_label: '使命',
    mission_h: '人类与\n数字智能的\n安全共存。',
    mission_p: '混血集团将碳中和机器人单元融入工业和日常生活——构建扩展而非替代人类能力的基础设施。',
    tech: [
      ['PMV驱动', '直流磁波导电机。快速响应，近零排放。'],
      ['轨道自动驾驶', '专有卫星星座，实现地面和空中自主导航。'],
      ['航天港', '北纬64.386° 东经40.710° — 亚轨道、轨道和月球任务发射设施。'],
    ],
    int_label: '内部平台',
    vputi_h: '混血\n途中',
    vputi_p: '专为混血集团员工打造的企业出行操作系统。AI构建门到门完整路线——出租车、航班、火车、酒店一键确认。',
    vputi_sub: '适用于所有混血集团员工。网页版和移动端。',
    open_app: '打开网页应用 →',
    apk: '下载APK · 即将推出',
    app_preview: '应用预览',
    internal: '内部',
    footer_loc: '北纬64.386° 东经40.710° · 阿尔汉格尔斯克地区',
    footer_c: '© 2024 混血集团',
    products: [
      ['01','电动飞机','航空','基于直流磁波导电机的零排放飞机。'],
      ['02','月球探测车','航天','用于月球表面探索的电磁驱动机器人车辆。'],
      ['03','阿尔戈打印机','工业','用于现场建造的工业级增材制造系统。'],
      ['04','仿生假肢','医疗科技','具有个性化校准的电磁驱动假肢。'],
      ['05','电动列车','交通','用于客货运的高速电磁轨道系统。'],
      ['06','自动货车','物流','配备混血卫星自动驾驶的电动货运牵引车。'],
      ['07','机械臂','机器人','用于工业和医疗的高精度机械臂。'],
      ['08','充电网络','基础设施','面向混血全系车队的固定和移动充电站。'],
    ],
    divisions: [
      ['01','混血 航空航天','电动飞机制造、航天港、卫星星座。','北纬64.386°'],
      ['02','混血 机器人','机械臂、仿生假肢、月球探测车、增材制造。','研发部门'],
      ['03','混血 交通','电动列车、公交车、自动货运卡车。','交通部门'],
      ['04','混血 充电','固定和移动充电基础设施网络。','基础设施'],
      ['05','混血 竞技','女子铁人三项队。','体育部门'],
      ['06','混血 电竞','电竞组织。学院+职业队。','电竞部门'],
    ],
  },
}

// Animated wireframe grid canvas
function WireframeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let t = 0

    const COLS = 28
    const ROWS = 16

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function getY(x: number, z: number, time: number): number {
      const nx = x / COLS
      const nz = z / ROWS
      return (
        Math.sin(nx * 3.5 + time * 0.6) * 38 +
        Math.sin(nz * 2.8 + time * 0.4) * 28 +
        Math.sin((nx + nz) * 2.2 + time * 0.5) * 18 +
        Math.sin(nx * 6 + time * 0.9) * 10
      )
    }

    function project(wx: number, wy: number, wz: number) {
      const W = canvas!.width
      const H = canvas!.height
      const camZ = ROWS * 1.1
      const fov = 420
      const dz = camZ - wz
      if (dz <= 0) return null
      const scale = fov / dz
      const px = W / 2 + wx * scale
      const py = H * 0.62 - wy * scale
      return { x: px, y: py, scale }
    }

    function draw() {
      const W = canvas!.width
      const H = canvas!.height
      ctx!.clearRect(0, 0, W, H)
      t += 0.008

      // Draw grid lines along Z (columns)
      for (let xi = 0; xi <= COLS; xi++) {
        const wx = (xi / COLS - 0.5) * W * 0.9
        ctx!.beginPath()
        let started = false
        for (let zi = 0; zi <= ROWS; zi++) {
          const wy = getY(xi, zi, t)
          const p = project(wx, wy, zi)
          if (!p) continue
          const alpha = 0.08 + (zi / ROWS) * 0.22
          if (!started) {
            ctx!.moveTo(p.x, p.y)
            started = true
          } else {
            ctx!.lineTo(p.x, p.y)
          }
        }
        ctx!.strokeStyle = `rgba(255,255,255,0.18)`
        ctx!.lineWidth = 0.6
        ctx!.stroke()
      }

      // Draw grid lines along X (rows)
      for (let zi = 0; zi <= ROWS; zi++) {
        ctx!.beginPath()
        let started = false
        for (let xi = 0; xi <= COLS; xi++) {
          const wx = (xi / COLS - 0.5) * W * 0.9
          const wy = getY(xi, zi, t)
          const p = project(wx, wy, zi)
          if (!p) continue
          if (!started) {
            ctx!.moveTo(p.x, p.y)
            started = true
          } else {
            ctx!.lineTo(p.x, p.y)
          }
        }
        const alpha = 0.08 + (zi / ROWS) * 0.22
        ctx!.strokeStyle = `rgba(255,255,255,${alpha})`
        ctx!.lineWidth = 0.6
        ctx!.stroke()
      }

      // Highlight intersection nodes near peaks
      for (let xi = 0; xi <= COLS; xi += 2) {
        for (let zi = 0; zi <= ROWS; zi += 2) {
          const wx = (xi / COLS - 0.5) * W * 0.9
          const wy = getY(xi, zi, t)
          if (wy > 30) {
            const p = project(wx, wy, zi)
            if (!p) continue
            ctx!.beginPath()
            ctx!.arc(p.x, p.y, 1.2, 0, Math.PI * 2)
            ctx!.fillStyle = `rgba(0,212,180,${Math.min(0.7, (wy - 30) / 40)})`
            ctx!.fill()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.55,
      }}
    />
  )
}

const C = { maxWidth: 1152, margin: '0 auto', padding: '0 48px' }
const teal = '#00D4B4'

export default function Home() {
  const [lang, setLang] = useState<Lang>('ru')
  const T = t[lang]

  const sec = (id?: string): React.CSSProperties => ({
    padding: '120px 0',
    borderTop: '1px solid #1a1a1a',
    position: 'relative',
    zIndex: 1,
    ...(id ? {} : {}),
  })

  return (
    <main style={{ background: '#080808', color: '#e8e8e8', fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>
      <WireframeCanvas />

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: '1px solid #1a1a1a', background: 'rgba(8,8,8,0.88)', backdropFilter: 'blur(16px)' }}>
        <div style={{ ...C, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: 7, background: teal, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#000', fontSize: 14, flexShrink: 0 }}>H</div>
            <div style={{ lineHeight: 1.15 }}>
              <div style={{ color: '#707070', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}>{T.corp}</div>
              <div style={{ color: '#fff', fontSize: 13, fontWeight: 600, letterSpacing: '0.18em' }}>{T.brand}</div>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
            {T.nav.map((label, i) => (
              <a key={i} href={['#products','#divisions','#mission','#vputi'][i]}
                style={{ color: '#707070', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}>
                {label}
              </a>
            ))}
          </div>

          {/* Lang + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', gap: 2, background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: 8, padding: 3 }}>
              {(['ru','en','zh'] as Lang[]).map(l => (
                <button key={l} onClick={() => setLang(l)}
                  style={{ padding: '4px 10px', borderRadius: 5, border: 'none', cursor: 'pointer', fontSize: 11, fontWeight: lang === l ? 700 : 400, background: lang === l ? teal : 'transparent', color: lang === l ? '#000' : '#707070', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.15s' }}>
                  {l}
                </button>
              ))}
            </div>
            <a href="https://hybrid-away.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 11, padding: '8px 18px', borderRadius: 6, border: `1px solid ${teal}`, color: teal, textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              {T.vputi_btn}
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 48px', position: 'relative', zIndex: 1 }}>
        {/* Gradient fade at bottom to blend with next section */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, transparent, #080808)', zIndex: 2, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 3, maxWidth: 760 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 40 }}>
            <div style={{ height: 1, width: 48, background: teal }} />
            <span style={{ color: teal, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 300 }}>{T.eyebrow}</span>
            <div style={{ height: 1, width: 48, background: teal }} />
          </div>
          <h1 style={{ fontSize: 'clamp(42px, 6vw, 76px)', fontWeight: 200, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 28 }}>
            {T.h1a}<br /><span style={{ color: teal, fontWeight: 300 }}>{T.h1b}</span>
          </h1>
          <p style={{ color: '#8a8a8a', fontSize: 16, fontWeight: 300, lineHeight: 1.8, maxWidth: 480, margin: '0 auto 48px', whiteSpace: 'pre-line' }}>{T.sub}</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#products" style={{ padding: '13px 36px', background: '#fff', color: '#000', borderRadius: 6, fontSize: 13, fontWeight: 500, textDecoration: 'none', letterSpacing: '0.05em' }}>{T.cta1}</a>
            <a href="https://hybrid-away.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ padding: '13px 36px', border: '1px solid #2a2a2a', color: '#707070', borderRadius: 6, fontSize: 13, fontWeight: 300, textDecoration: 'none', letterSpacing: '0.05em' }}>{T.cta2}</a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={sec()}>
        <div style={C}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ color: teal, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 16 }}>{T.pl_label}</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 200, color: '#fff', whiteSpace: 'pre-line' }}>{T.pl_h}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: '#1a1a1a' }}>
            {T.products.map(([num, name, tag, desc]) => (
              <div key={num} style={{ background: '#080808', padding: '28px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <span style={{ color: '#333', fontSize: 11, fontFamily: 'monospace' }}>{num}</span>
                  <span style={{ color: '#404040', fontSize: 10, border: '1px solid #1a1a1a', padding: '2px 8px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{tag}</span>
                </div>
                <div style={{ width: '100%', height: 110, background: '#0a0a0a', border: '1px solid #141414', borderRadius: 6, marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#1a1a1a', fontSize: 11, fontFamily: 'monospace' }}>[ image ]</span>
                </div>
                <div style={{ color: '#e8e8e8', fontSize: 13, fontWeight: 400, marginBottom: 8 }}>{name}</div>
                <div style={{ color: '#606060', fontSize: 12, lineHeight: 1.6, fontWeight: 300 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section id="divisions" style={sec()}>
        <div style={C}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ color: teal, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 16 }}>{T.div_label}</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 200, color: '#fff' }}>{T.div_h}</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: '#1a1a1a' }}>
            {T.divisions.map(([num, name, desc, loc]) => (
              <div key={num} style={{ background: '#080808', padding: '20px 28px', display: 'flex', alignItems: 'center', gap: 24 }}>
                <span style={{ color: '#333', fontSize: 11, fontFamily: 'monospace', width: 28, flexShrink: 0 }}>{num}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: '#e8e8e8', fontSize: 13, fontWeight: 400, marginBottom: 3 }}>{name}</div>
                  <div style={{ color: '#606060', fontSize: 12, fontWeight: 300 }}>{desc}</div>
                </div>
                <div style={{ color: '#404040', fontSize: 10, fontFamily: 'monospace', textAlign: 'right', flexShrink: 0 }}>{loc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" style={sec()}>
        <div style={{ ...C, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div style={{ color: teal, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 32 }}>{T.mission_label}</div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 200, color: '#fff', lineHeight: 1.35, whiteSpace: 'pre-line' }}>{T.mission_h}</h2>
          </div>
          <div style={{ paddingTop: 56 }}>
            <p style={{ color: '#606060', fontSize: 13, fontWeight: 300, lineHeight: 1.9, marginBottom: 36 }}>{T.mission_p}</p>
            {T.tech.map(([title, desc]) => (
              <div key={title} style={{ borderLeft: '2px solid #1a1a1a', paddingLeft: 16, marginBottom: 24 }}>
                <div style={{ color: '#e8e8e8', fontSize: 12, fontWeight: 500, marginBottom: 4 }}>{title}</div>
                <div style={{ color: '#606060', fontSize: 12, fontWeight: 300, lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* В ПУТИ */}
      <section id="vputi" style={sec()}>
        <div style={{ ...C, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ color: teal, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 32 }}>{T.int_label}</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 200, color: '#fff', marginBottom: 24, lineHeight: 1.15 }}>
              {T.vputi_h.split('\n')[0]}<br /><span style={{ color: teal }}>{T.vputi_h.split('\n')[1]}</span>
            </h2>
            <p style={{ color: '#606060', fontSize: 13, fontWeight: 300, lineHeight: 1.9, marginBottom: 8 }}>{T.vputi_p}</p>
            <p style={{ color: '#404040', fontSize: 12, fontWeight: 300, lineHeight: 1.8, marginBottom: 40 }}>{T.vputi_sub}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://hybrid-away.vercel.app" target="_blank" rel="noopener noreferrer"
                style={{ padding: '13px 28px', background: teal, color: '#000', borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>{T.open_app}</a>
              <button disabled style={{ padding: '13px 28px', border: '1px solid #1a1a1a', color: '#404040', borderRadius: 6, fontSize: 13, background: 'transparent', cursor: 'not-allowed', fontWeight: 300 }}>{T.apk}</button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ width: 220, aspectRatio: '9/16', background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: teal, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, color: '#000', margin: '0 auto 12px' }}>H</div>
                <div style={{ color: '#fff', fontSize: 14, fontWeight: 300 }}>В Пути</div>
                <div style={{ color: '#404040', fontSize: 11, marginTop: 6 }}>{T.app_preview}</div>
              </div>
            </div>
            <div style={{ position: 'absolute', top: -12, right: 24, padding: '5px 12px', borderRadius: 20, background: '#0a0a0a', border: `1px solid ${teal}`, color: teal, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              {T.internal}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #1a1a1a', padding: '40px 0', position: 'relative', zIndex: 1 }}>
        <div style={{ ...C, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 20, height: 20, borderRadius: 4, background: teal, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#000', fontSize: 11 }}>H</div>
            <div>
              <div style={{ color: '#333', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{T.corp}</div>
              <div style={{ color: '#505050', fontSize: 11, letterSpacing: '0.15em', fontWeight: 400 }}>{T.brand}</div>
            </div>
          </div>
          <div style={{ color: '#404040', fontSize: 11, fontFamily: 'monospace' }}>{T.footer_loc}</div>
          <div style={{ color: '#404040', fontSize: 11, fontWeight: 300 }}>{T.footer_c}</div>
        </div>
      </footer>

    </main>
  )
}
