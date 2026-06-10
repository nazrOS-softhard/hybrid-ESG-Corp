'use client'

import { useState } from 'react'

type Lang = 'ru' | 'en' | 'zh'

const t = {
  ru: {
    nav: ['Продукты', 'Подразделения', 'Миссия', 'В Пути'],
    vputi_btn: 'В Пути →',
    eyebrow: 'Hybrid Inc. · Осн. 2024',
    h1a: 'Углеродно-нейтральная',
    h1b: 'робототехника',
    sub: 'От электромагнитных двигателей до лунных роверов.\nИнфраструктура будущего — сегодня.',
    cta1: 'Продукты',
    cta2: 'Hybrid В Пути →',
    pl_label: 'Линейка продуктов',
    pl_h: 'Восемь систем.\nОдна миссия.',
    div_label: 'Структура',
    div_h: 'Подразделения',
    mission_label: 'Миссия',
    mission_h: 'Безопасное сосуществование\nчеловека и\nцифрового разума.',
    mission_p: 'Hybrid Inc. интегрирует углеродно-нейтральные роботизированные единицы в промышленность и быт — создавая инфраструктуру, где возможности человека расширяются, а не заменяются.',
    tech: [
      ['ПМВ-двигатель', 'Прямоточный магнитно-волноводный двигатель. Быстрый отклик, нулевые выбросы.'],
      ['Орбитальный автопилот', 'Спутниковая группировка для автономной навигации наземных и воздушных средств.'],
      ['Аэрокосмический порт', '64.386°с.ш. 40.710°в.д. — стартовый комплекс для суборбитальных, орбитальных и лунных миссий.'],
    ],
    int_label: 'Внутренняя платформа',
    vputi_h: 'Hybrid\nВ Пути',
    vputi_p: 'Корпоративная транспортная ОС для сотрудников Hybrid Inc. ИИ строит маршрут от двери до двери — такси, рейс, поезд, отель в одном подтверждении.',
    vputi_sub: 'Доступно всем сотрудникам Hybrid Inc. Веб и мобильное приложение.',
    open_app: 'Открыть веб-приложение →',
    apk: 'Скачать APK · Скоро',
    app_preview: 'Превью приложения',
    internal: 'Внутреннее',
    footer_loc: '64.386°с.ш. 40.710°в.д. · Архангельская обл.',
    footer_c: '© 2024 Hybrid Inc.',
    products: [
      ['01','Электроджет','Авиация','Самолёт с нулевыми выбросами на прямоточных магнитно-волноводных двигателях.'],
      ['02','Лунный ровер','Космос','Роботизированные транспортные средства для исследования лунной поверхности.'],
      ['03','Принтер Арго','Производство','Промышленная аддитивная установка для печати зданий на месте возведения.'],
      ['04','Бионика','МедТех','Электромагнитные протезы с индивидуальной калибровкой и высокой точностью.'],
      ['05','Электропоезд','Транспорт','Высокоскоростные электромагнитные рельсовые системы для пассажиров и грузов.'],
      ['06','Электротягач','Логистика','Автопилотируемые грузовые тягачи со спутниковой навигацией Hybrid.'],
      ['07','Манипуляторы','Робототехника','Высокоточные роботизированные руки для промышленности и медицины.'],
      ['08','Сеть зарядок','Инфраструктура','Стационарные и мобильные зарядные станции для всего флота Hybrid.'],
    ],
    divisions: [
      ['01','Hybrid Aerospace','Производство электроджетов, аэрокосмический порт, спутниковая группировка.','64.386°с.ш. 40.710°в.д.'],
      ['02','Hybrid Robotics','Манипуляторы, бионические протезы, лунные роверы, аддитивное производство.','НИОКР'],
      ['03','Hybrid Transit','Электропоезда, автобусы, автономные грузовые тягачи.','Транспорт'],
      ['04','Hybrid Charge','Сеть стационарных и мобильных зарядных станций.','Инфраструктура'],
      ['05','Hybrid Athletics','Женская команда по триатлону.','Спорт'],
      ['06','Hybrid Esports','Киберспортивная организация. Академия и про-команды.','Киберспорт'],
    ],
  },
  en: {
    nav: ['Products', 'Divisions', 'Mission', 'В Пути'],
    vputi_btn: 'В Пути →',
    eyebrow: 'Hybrid Inc. · Est. 2024',
    h1a: 'Carbon-neutral',
    h1b: 'robotic systems',
    sub: 'From electromagnetic drives to lunar rovers.\nEngineering tomorrow\'s infrastructure today.',
    cta1: 'Our Products',
    cta2: 'Hybrid В Пути →',
    pl_label: 'Product Line',
    pl_h: 'Eight systems.\nOne mission.',
    div_label: 'Structure',
    div_h: 'Divisions',
    mission_label: 'Mission',
    mission_h: 'Safe coexistence\nbetween humans\nand digital intelligence.',
    mission_p: 'Hybrid Inc. integrates carbon-neutral robotic units into industry and daily life — building infrastructure where human capability is extended, not replaced.',
    tech: [
      ['PMV Drive', 'Direct-flow magnetic-waveguide motor. Fast response, near-zero emissions.'],
      ['Orbital Autopilot', 'Proprietary satellite constellation enabling autonomous ground and air navigation.'],
      ['Aerospace Port', '64.386°N 40.710°E — launch facility for suborbit, orbit, and lunar missions.'],
    ],
    int_label: 'Internal Platform',
    vputi_h: 'Hybrid\nВ Пути',
    vputi_p: 'Corporate travel OS for Hybrid Inc. employees. AI builds full door-to-door routes — taxi, flight, train, hotel in one confirmation.',
    vputi_sub: 'Available to all Hybrid Inc. staff. Web and mobile.',
    open_app: 'Open Web App →',
    apk: 'Download APK · Soon',
    app_preview: 'App Preview',
    internal: 'Internal',
    footer_loc: '64.386°N 40.710°E · Arkhangelsk Region',
    footer_c: '© 2024 Hybrid Inc.',
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
    nav: ['产品', '部门', '使命', '途中'],
    vputi_btn: '途中 →',
    eyebrow: 'Hybrid Inc. · 成立于 2024',
    h1a: '碳中和',
    h1b: '机器人系统',
    sub: '从电磁驱动到月球探测车。\n今天构建明天的基础设施。',
    cta1: '我们的产品',
    cta2: 'Hybrid 途中 →',
    pl_label: '产品线',
    pl_h: '八大系统。\n一个使命。',
    div_label: '结构',
    div_h: '部门',
    mission_label: '使命',
    mission_h: '人类与\n数字智能的\n安全共存。',
    mission_p: 'Hybrid Inc. 将碳中和机器人单元融入工业和日常生活——构建扩展而非替代人类能力的基础设施。',
    tech: [
      ['PMV驱动', '直流磁波导电机。快速响应，近零排放。'],
      ['轨道自动驾驶', '专有卫星星座，实现地面和空中自主导航。'],
      ['航天港', '北纬64.386° 东经40.710° — 亚轨道、轨道和月球任务发射设施。'],
    ],
    int_label: '内部平台',
    vputi_h: 'Hybrid\n途中',
    vputi_p: '专为Hybrid Inc.员工打造的企业出行操作系统。AI构建门到门完整路线——出租车、航班、火车、酒店一键确认。',
    vputi_sub: '适用于所有Hybrid Inc.员工。网页版和移动端。',
    open_app: '打开网页应用 →',
    apk: '下载APK · 即将推出',
    app_preview: '应用预览',
    internal: '内部',
    footer_loc: '北纬64.386° 东经40.710° · 阿尔汉格尔斯克地区',
    footer_c: '© 2024 Hybrid Inc.',
    products: [
      ['01','电动飞机','航空','基于直流磁波导电机的零排放飞机。'],
      ['02','月球探测车','航天','用于月球表面探索的电磁驱动机器人车辆。'],
      ['03','阿尔戈打印机','工业','用于现场建造的工业级增材制造系统。'],
      ['04','仿生假肢','医疗科技','具有个性化校准的电磁驱动假肢。'],
      ['05','电动列车','交通','用于客货运的高速电磁轨道系统。'],
      ['06','自动货车','物流','配备Hybrid卫星自动驾驶的电动货运牵引车。'],
      ['07','机械臂','机器人','用于工业和医疗的高精度机械臂。'],
      ['08','充电网络','基础设施','面向Hybrid全系车队的固定和移动充电站。'],
    ],
    divisions: [
      ['01','Hybrid 航空航天','电动飞机制造、航天港、卫星星座。','北纬64.386°'],
      ['02','Hybrid 机器人','机械臂、仿生假肢、月球探测车、增材制造。','研发部门'],
      ['03','Hybrid 交通','电动列车、公交车、自动货运卡车。','交通部门'],
      ['04','Hybrid 充电','固定和移动充电基础设施网络。','基础设施'],
      ['05','Hybrid 竞技','女子铁人三项队。','体育部门'],
      ['06','Hybrid 电竞','电竞组织。学院+职业队。','电竞部门'],
    ],
  },
}

const S = {
  wrap: { background: '#080808', color: '#e8e8e8', fontFamily: 'Inter, system-ui, sans-serif' },
  nav: { position: 'fixed' as const, top: 0, left: 0, right: 0, zIndex: 50, borderBottom: '1px solid #1a1a1a', background: 'rgba(8,8,8,0.95)', backdropFilter: 'blur(12px)' },
  container: { maxWidth: 1152, margin: '0 auto', padding: '0 48px' },
  teal: { color: '#00D4B4' },
  dim: { color: '#707070' },
  muted: { color: '#404040' },
  white: { color: '#fff' },
  border: { borderTop: '1px solid #1a1a1a' },
  mono: { fontFamily: 'monospace' },
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('ru')
  const T = t[lang]

  return (
    <main style={S.wrap}>

      {/* NAV */}
      <nav style={S.nav}>
        <div style={{ ...S.container, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: '#00D4B4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#000', fontSize: 13, flexShrink: 0 }}>H</div>
            <span style={{ color: '#fff', fontWeight: 300, fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase' as const }}>Hybrid Inc.</span>
          </div>

          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {T.nav.map((label, i) => (
              <a key={i} href={['#products','#divisions','#mission','#vputi'][i]} style={{ ...S.dim, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' as const, textDecoration: 'none' }}>{label}</a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Lang switcher */}
            <div style={{ display: 'flex', gap: 2, background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: 8, padding: 3 }}>
              {(['ru','en','zh'] as Lang[]).map(l => (
                <button key={l} onClick={() => setLang(l)} style={{ padding: '4px 10px', borderRadius: 6, border: 'none', cursor: 'pointer', fontSize: 11, fontWeight: lang === l ? 600 : 400, background: lang === l ? '#00D4B4' : 'transparent', color: lang === l ? '#000' : '#707070', letterSpacing: '0.05em', textTransform: 'uppercase' as const, transition: 'all 0.15s' }}>
                  {l}
                </button>
              ))}
            </div>
            <a href="https://hybrid-away.vercel.app" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, padding: '8px 16px', borderRadius: 6, border: '1px solid #00D4B4', ...S.teal, textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' as const, whiteSpace: 'nowrap' as const }}>
              {T.vputi_btn}
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' as const, padding: '0 48px', position: 'relative' as const }}>
        <div style={{ position: 'absolute' as const, inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div style={{ position: 'relative' as const, zIndex: 1, maxWidth: 760 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 40 }}>
            <div style={{ height: 1, width: 48, background: '#00D4B4' }} />
            <span style={{ ...S.teal, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase' as const, fontWeight: 300 }}>{T.eyebrow}</span>
            <div style={{ height: 1, width: 48, background: '#00D4B4' }} />
          </div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 200, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 28 }}>
            {T.h1a}<br /><span style={{ ...S.teal, fontWeight: 300 }}>{T.h1b}</span>
          </h1>
          <p style={{ ...S.dim, fontSize: 16, fontWeight: 300, lineHeight: 1.8, maxWidth: 480, margin: '0 auto 48px', whiteSpace: 'pre-line' as const }}>{T.sub}</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <a href="#products" style={{ padding: '13px 36px', background: '#fff', color: '#000', borderRadius: 6, fontSize: 13, fontWeight: 500, textDecoration: 'none', letterSpacing: '0.05em' }}>{T.cta1}</a>
            <a href="https://hybrid-away.vercel.app" target="_blank" rel="noopener noreferrer" style={{ padding: '13px 36px', border: '1px solid #1a1a1a', ...S.dim, borderRadius: 6, fontSize: 13, fontWeight: 300, textDecoration: 'none', letterSpacing: '0.05em' }}>{T.cta2}</a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={{ ...S.border, padding: '120px 0' }}>
        <div style={S.container}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ ...S.teal, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase' as const, marginBottom: 16 }}>{T.pl_label}</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 200, color: '#fff', whiteSpace: 'pre-line' as const }}>{T.pl_h}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: '#1a1a1a' }}>
            {T.products.map(([num, name, tag, desc]) => (
              <div key={num} style={{ background: '#080808', padding: '28px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <span style={{ ...S.muted, fontSize: 11, ...S.mono }}>{num}</span>
                  <span style={{ ...S.muted, fontSize: 10, border: '1px solid #1a1a1a', padding: '2px 8px', borderRadius: 20, textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>{tag}</span>
                </div>
                <div style={{ width: '100%', height: 110, background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: 6, marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#1a1a1a', fontSize: 11, ...S.mono }}>[ image ]</span>
                </div>
                <div style={{ color: '#fff', fontSize: 13, fontWeight: 400, marginBottom: 8 }}>{name}</div>
                <div style={{ ...S.dim, fontSize: 12, lineHeight: 1.6, fontWeight: 300 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section id="divisions" style={{ ...S.border, padding: '120px 0' }}>
        <div style={S.container}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ ...S.teal, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase' as const, marginBottom: 16 }}>{T.div_label}</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 200, color: '#fff' }}>{T.div_h}</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 1, background: '#1a1a1a' }}>
            {T.divisions.map(([num, name, desc, loc]) => (
              <div key={num} style={{ background: '#080808', padding: '20px 28px', display: 'flex', alignItems: 'center', gap: 24 }}>
                <span style={{ ...S.muted, fontSize: 11, ...S.mono, width: 28, flexShrink: 0 }}>{num}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: '#fff', fontSize: 13, fontWeight: 400, marginBottom: 3 }}>{name}</div>
                  <div style={{ ...S.dim, fontSize: 12, fontWeight: 300 }}>{desc}</div>
                </div>
                <div style={{ ...S.muted, fontSize: 10, ...S.mono, textAlign: 'right' as const, flexShrink: 0 }}>{loc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" style={{ ...S.border, padding: '120px 0' }}>
        <div style={{ ...S.container, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div style={{ ...S.teal, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase' as const, marginBottom: 32 }}>{T.mission_label}</div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 200, color: '#fff', lineHeight: 1.3, whiteSpace: 'pre-line' as const }}>{T.mission_h}</h2>
          </div>
          <div style={{ paddingTop: 56 }}>
            <p style={{ ...S.dim, fontSize: 13, fontWeight: 300, lineHeight: 1.9, marginBottom: 36 }}>{T.mission_p}</p>
            {T.tech.map(([title, desc]) => (
              <div key={title} style={{ borderLeft: '2px solid #1a1a1a', paddingLeft: 16, marginBottom: 24 }}>
                <div style={{ color: '#fff', fontSize: 12, fontWeight: 500, marginBottom: 4 }}>{title}</div>
                <div style={{ ...S.dim, fontSize: 12, fontWeight: 300, lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* В ПУТИ */}
      <section id="vputi" style={{ ...S.border, padding: '120px 0' }}>
        <div style={{ ...S.container, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ ...S.teal, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase' as const, marginBottom: 32 }}>{T.int_label}</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 200, color: '#fff', marginBottom: 24, whiteSpace: 'pre-line' as const, lineHeight: 1.2 }}>
              {T.vputi_h.split('\n')[0]}<br /><span style={S.teal}>{T.vputi_h.split('\n')[1]}</span>
            </h2>
            <p style={{ ...S.dim, fontSize: 13, fontWeight: 300, lineHeight: 1.9, marginBottom: 8 }}>{T.vputi_p}</p>
            <p style={{ ...S.muted, fontSize: 12, fontWeight: 300, lineHeight: 1.8, marginBottom: 40 }}>{T.vputi_sub}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
              <a href="https://hybrid-away.vercel.app" target="_blank" rel="noopener noreferrer"
                style={{ padding: '13px 28px', background: '#00D4B4', color: '#000', borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: 'none', letterSpacing: '0.03em' }}>{T.open_app}</a>
              <button disabled style={{ padding: '13px 28px', border: '1px solid #1a1a1a', ...S.muted, borderRadius: 6, fontSize: 13, background: 'transparent', cursor: 'not-allowed', fontWeight: 300 }}>{T.apk}</button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' as const }}>
            <div style={{ width: 220, aspectRatio: '9/16', background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' as const }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: '#00D4B4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, color: '#000', margin: '0 auto 12px' }}>H</div>
                <div style={{ color: '#fff', fontSize: 14, fontWeight: 300 }}>В Пути</div>
                <div style={{ ...S.muted, fontSize: 11, marginTop: 6 }}>{T.app_preview}</div>
              </div>
            </div>
            <div style={{ position: 'absolute' as const, top: -12, right: 24, padding: '5px 12px', borderRadius: 20, background: '#0f0f0f', border: '1px solid #00D4B4', ...S.teal, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>
              {T.internal}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ ...S.border, padding: '40px 0' }}>
        <div style={{ ...S.container, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 20, height: 20, borderRadius: 4, background: '#00D4B4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#000', fontSize: 11 }}>H</div>
            <span style={{ ...S.muted, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' as const, fontWeight: 300 }}>Hybrid Inc.</span>
          </div>
          <div style={{ ...S.muted, fontSize: 11, ...S.mono }}>{T.footer_loc}</div>
          <div style={{ ...S.muted, fontSize: 11, fontWeight: 300 }}>{T.footer_c}</div>
        </div>
      </footer>

    </main>
  )
}
