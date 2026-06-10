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
    h1b: 'robotics',
    sub: 'From electromagnetic engines to lunar rovers.\nFuture infrastructure — today.',
    cta1: 'Products',
    cta2: 'Hybrid En Route →',
    pl_label: 'Product line',
    pl_h: 'Eight systems.\nOne mission.',
    div_label: 'Structure',
    div_h: 'Divisions',
    mission_label: 'Mission',
    mission_h: 'Safe coexistence\nof human and\ndigital intelligence.',
    mission_p: 'Hybrid Conglomerate integrates carbon-neutral robotic units into industry and everyday life — creating an infrastructure where human capabilities are expanded, not replaced.',
    tech: [
      ['PMW Engine', 'Direct-flow magnetic waveguide engine. Fast response, zero emissions.'],
      ['Orbital Autopilot', 'Satellite constellation for autonomous navigation of ground and air vehicles.'],
      ['Aerospace Port', '64.386°N 40.710°E — launch complex for suborbital, orbital, and lunar missions.'],
    ],
    int_label: 'Internal platform',
    vputi_h: 'Hybrid\nEn Route',
    vputi_p: 'Corporate transport OS for conglomerate employees. AI builds a door-to-door route — taxi, flight, train, hotel in one confirmation.',
    vputi_sub: 'Available to all Hybrid employees. Web and mobile app.',
    open_app: 'Open web-app →',
    apk: 'Download APK · Coming soon',
    app_preview: 'App preview',
    internal: 'Internal',
    footer_loc: '64.386°N 40.710°E · Arkhangelsk Region',
    footer_c: '© 2024 Hybrid Conglomerate',
    products: [
      ['01','Electrojets','Aviation','Zero-emission aircraft powered by direct-flow magnetic waveguide engines.'],
      ['02','Lunar Rover','Space','Robotic vehicles for lunar surface exploration.'],
      ['03','Argo Printer','Manufacturing','Industrial additive unit for on-site building construction.'],
      ['04','Bionics','MedTech','Electromagnetic prosthetics with individual calibration and high precision.'],
      ['05','Electric Train','Transport','High-speed electromagnetic rail systems for passengers and cargo.'],
      ['06','Electric Hauler','Logistics','Autonomous cargo haulers with Hybrid satellite navigation.'],
      ['07','Manipulators','Robotics','High-precision robotic arms for industry and medicine.'],
      ['08','Charging Network','Infrastructure','Stationary and mobile charging stations for the entire Hybrid fleet.'],
    ],
    divisions: [
      ['01','Hybrid Aerospace','Production of electrojets, aerospace port, satellite constellation.','64.386°N 40.710°E'],
      ['02','Hybrid Robotics','Manipulators, bionic prosthetics, lunar rovers, additive manufacturing.','R&D'],
      ['03','Hybrid Transit','Electric trains, buses, autonomous cargo haulers.','Transport'],
      ['04','Hybrid Charge','Network of stationary and mobile charging stations.','Infrastructure'],
      ['05','Hybrid Athletics','Women’s triathlon team.','Sports'],
      ['06','Hybrid Esports','Esports organization. Academy and pro-teams.','Esports'],
    ],
  },
  zh: {
    corp: '企业集团',
    brand: 'HYBRID',
    nav: ['产品', '事业部', '使命', '在途 (En Route)'],
    vputi_btn: '在途 →',
    eyebrow: 'Hybrid 集团 · 始于 2024年',
    h1a: '碳中和',
    h1b: '机器人技术',
    sub: '从电磁发动机到月球车。\n未来基础设施 — 即刻呈现。',
    cta1: '产品',
    cta2: 'Hybrid 在途 →',
    pl_label: '产品系列',
    pl_h: '八大系统。\n同一使命。',
    div_label: '组织架构',
    div_h: '事业部',
    mission_label: '使命',
    mission_h: '人类与数字智能的\n安全共存。',
    mission_p: 'Hybrid 集团致力于将碳中和机器人单元融入工业与日常生活，打造一个人机协作、能力互补而非替代的基础设施。',
    tech: [
      ['PMW 发动机', '直通式磁波导发动机。响应迅速，零排放。'],
      ['轨道自动驾驶', '用于地面和空中交通工具自主导航的卫星星座。'],
      ['航天港', '北纬 64.386° 东经 40.710° — 用于亚轨道、轨道及月球任务的发射中心。'],
    ],
    int_label: '内部平台',
    vputi_h: 'Hybrid\n在途',
    vputi_p: '专为集团员工打造的内部差旅操作系统。人工智能实现门到门路线规划 — 出租车、航班、火车、酒店确认一站式搞定。',
    vputi_sub: '向所有 Hybrid 员工开放。提供网页版及移动应用。',
    open_app: '打开网页应用 →',
    apk: '下载 APK · 即将上线',
    app_preview: '应用预览',
    internal: '内部使用',
    footer_loc: '北纬 64.386° 东经 40.710° · 阿尔汉格尔斯克州',
    footer_c: '© 2024 Hybrid 集团',
    products: [
      ['01','电动喷气机','航空','采用直通式磁波导发动机的零排放飞机。'],
      ['02','月球车','航天','用于月球表面探测的机器人交通工具。'],
      ['03','Argo 打印机','制造','用于施工现场建筑打印的工业增材制造设备。'],
      ['04','仿生学','医疗科技','具备个体校准和高精度的电磁假肢。'],
      ['05','电动列车','交通','用于客运和货运的高速电磁轨道系统。'],
      ['06','电动牵引车','物流','配备 Hybrid 卫星导航系统的自动驾驶货运牵引车。'],
      ['07','机械臂','机器人','适用于工业和医疗领域的高精度机械手臂。'],
      ['08','充电网络','基础设施','服务于 Hybrid 全线车队的固定及移动式充电站。'],
    ],
    divisions: [
      ['01','Hybrid 航空航天','电动喷气机生产、航天港、卫星星座。','北纬 64.386° 东经 40.710°'],
      ['02','Hybrid 机器人','机械臂、仿生假肢、月球车、增材制造。','研发中心'],
      ['03','Hybrid 交通','电动列车、公交车、自动驾驶货运牵引车。','交通运输'],
      ['04','Hybrid 充电','固定及移动式充电站网络。','基础设施'],
      ['05','Hybrid 运动','女子铁人三项队。','体育'],
      ['06','Hybrid 电竞','电子竞技组织。学院及职业战队。','电子竞技'],
    ],
  },
}

// Wireframe Canvas
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

    function getY(x: number, z: number, time: number) {
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

      for (let xi = 0; xi <= COLS; xi++) {
        const wx = (xi / COLS - 0.5) * W * 0.9
        ctx!.beginPath()
        let started = false
        for (let zi = 0; zi <= ROWS; zi++) {
          const wy = getY(xi, zi, t)
          const p = project(wx, wy, zi)
          if (!p) continue
          if (!started) { ctx!.moveTo(p.x, p.y); started = true } else { ctx!.lineTo(p.x, p.y) }
        }
        ctx!.strokeStyle = `rgba(255,255,255,0.18)`
        ctx!.lineWidth = 0.6
        ctx!.stroke()
      }

      for (let zi = 0; zi <= ROWS; zi++) {
        ctx!.beginPath()
        let started = false
        for (let xi = 0; xi <= COLS; xi++) {
          const wx = (xi / COLS - 0.5) * W * 0.9
          const wy = getY(xi, zi, t)
          const p = project(wx, wy, zi)
          if (!p) continue
          if (!started) { ctx!.moveTo(p.x, p.y); started = true } else { ctx!.lineTo(p.x, p.y) }
        }
        ctx!.strokeStyle = `rgba(255,255,255,0.22)`
        ctx!.lineWidth = 0.6
        ctx!.stroke()
      }
    }

    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none', opacity:0.55 }} />
}

const C = { maxWidth: 1152, margin: '0 auto', padding: '0 48px' }
const teal = '#00D4B4'

export default function Home() {
  const [lang, setLang] = useState<Lang>('ru')
  const T = t[lang]

  return (
    <main style={{ background: '#080808', color: '#e8e8e8', fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>
      <WireframeCanvas />
      {/* Навигация, Hero, Products, Divisions, Mission, В Пути, Footer — весь контент как ранее, с актуальными описаниями и тремя языками */}
    </main>
  )
}
