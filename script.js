// ==========================================
// 1. MBTI 질문 데이터 (총 12문항)
// ==========================================
const questions = [
  // --- E vs I (외향 vs 내향) ---
  {
    id: 1,
    dimension: 'EI',
    emoji: '🛋️',
    question: '기다리던 주말! 에너지를 충전하는 나만의 방식은?',
    choiceA: { text: '친구들과 약속 잡고 나가서 신나게 놀아야 힘이 나!', type: 'E' },
    choiceB: { text: '집에서 넷플릭스 보며 침대와 한 몸이 되어 푹 쉬기!', type: 'I' }
  },
  {
    id: 2,
    dimension: 'EI',
    emoji: '🎉',
    question: '여러 사람이 모인 시끌벅적한 파티나 모임에 갔을 때 나는?',
    choiceA: { text: '새로운 사람들과도 금방 친해지며 분위기를 신나게 주도한다', type: 'E' },
    choiceB: { text: '아는 사람 곁에 조용히 있거나 배터리가 닳아 집에 가고 싶어진다', type: 'I' }
  },
  {
    id: 3,
    dimension: 'EI',
    emoji: '👋',
    question: '길을 걷다 우연히 오랜 동창이나 지인을 마주쳤을 때!',
    choiceA: { text: '"어?! 대박 반갑다!" 하며 먼저 큰 소리로 인사하고 다가간다', type: 'E' },
    choiceB: { text: '눈이 마주치지 않았다면 슬쩍 못 본 척 지나갈까 고민한다', type: 'I' }
  },

  // --- S vs N (감각 vs 직관) ---
  {
    id: 4,
    dimension: 'SN',
    emoji: '✈️',
    question: '여행 갈 때 숙소를 고르는 나의 가장 중요한 기준은?',
    choiceA: { text: '위치, 청결도, 가격, 후기 등 현실적인 편의 스펙을 꼼꼼히 확인', type: 'S' },
    choiceB: { text: '감성적인 무드, 사진 잘 나오는 독특한 뷰와 분위기가 최우선!', type: 'N' }
  },
  {
    id: 5,
    dimension: 'SN',
    emoji: '🍎',
    question: '"사과"라는 단어를 들었을 때 가장 먼저 떠오르는 생각은?',
    choiceA: { text: '빨갛고 동그랗고 아침에 먹으면 맛있는 과일!', type: 'S' },
    choiceB: { text: '백설공주, 뉴턴의 만유인력, 스티브 잡스, 사과향 샴푸 등 상상의 나래', type: 'N' }
  },
  {
    id: 6,
    dimension: 'SN',
    emoji: '💡',
    question: '새로운 프로젝트나 업무를 시작할 때 내가 더 선호하는 방식은?',
    choiceA: { text: '이미 검증된 매뉴얼과 정해진 절차를 따라 차근차근 실행하기', type: 'S' },
    choiceB: { text: '독창적인 아이디어를 자유롭게 던지고 큰 그림을 그리며 시도하기', type: 'N' }
  },

  // --- T vs F (사고 vs 감정) ---
  {
    id: 7,
    dimension: 'TF',
    emoji: '🥐',
    question: '친구가 "나 오늘 너무 우울해서 빵 샀어..."라고 말한다면 나의 반응은?',
    choiceA: { text: '"왜 우울한데? 무슨 일 있었어?" (원인 파악)', type: 'T' },
    choiceB: { text: '"헐ㅠㅠ 무슨 빵 샀어? 기분 많이 상했겠다 토닥토닥" (감정 공감)', type: 'F' }
  },
  {
    id: 8,
    dimension: 'TF',
    emoji: '😢',
    question: '친구가 큰 고민을 털어놓으며 눈물을 글썽일 때 나의 행동은?',
    choiceA: { text: '어떻게 해결해야 할지 실질적인 조언과 해결책을 분석해준다', type: 'T' },
    choiceB: { text: '일단 진심으로 마음 아파하며 친구의 감정을 먼저 다독여준다', type: 'F' }
  },
  {
    id: 9,
    dimension: 'TF',
    emoji: '⚖️',
    question: '팀 프로젝트 중 동료가 명백한 실수를 했을 때 나의 태도는?',
    choiceA: { text: '원인을 객관적으로 분석하고 다음 재발 방지 대책을 명확히 짚는다', type: 'T' },
    choiceB: { text: '동료가 주눅 들거나 상처받지 않도록 부드럽고 따뜻하게 말한다', type: 'F' }
  },

  // --- J vs P (판단 vs 인식) ---
  {
    id: 10,
    dimension: 'JP',
    emoji: '🧳',
    question: '여행 출발 전날 밤, 나의 짐 싸기와 여행 계획 상태는?',
    choiceA: { text: '체크리스트대로 착착 짐 싸고 분 단위 일정표까지 준비 완료!', type: 'J' },
    choiceB: { text: '출발 직전에 눈에 띄는 것 위주로 챙기고, 일정은 발길 닿는 대로!', type: 'P' }
  },
  {
    id: 11,
    dimension: 'JP',
    emoji: '⏰',
    question: '주말에 잡혀있던 중요한 약속이 갑자기 당일 취소되었다면?',
    choiceA: { text: '오늘 하루 세워둔 스케줄이 어긋나서 살짝 당황스럽고 아쉽다', type: 'J' },
    choiceB: { text: '오예! 갑자기 공짜 자유시간 획득! 뒹굴거리며 즉흥적으로 놀자!', type: 'P' }
  },
  {
    id: 12,
    dimension: 'JP',
    emoji: '📝',
    question: '마감일이 정해진 중요한 과제나 업무를 처리하는 나의 스타일은?',
    choiceA: { text: '미리미리 날짜별로 나누어 계획적으로 끝내두어야 마음이 편하다', type: 'J' },
    choiceB: { text: '마감 직전의 초인적인 집중력(벼락치기)으로 스릴 넘치게 끝낸다', type: 'P' }
  }
];

// ==========================================
// 2. 16가지 MBTI 결과 데이터
// ==========================================
const mbtiResults = {
  ENFP: {
    emoji: '✨',
    nickname: '반짝이는 열정 부자, 인간 비타민',
    desc: '풍부한 상상력과 넘치는 에너지로 주변 사람들에게 항상 활력을 불어넣는 따뜻한 자유인입니다.',
    traits: [
      '새로운 사람, 새로운 아이디어와의 만남을 엄청나게 즐겨요.',
      '분위기 메이커 역할을 톡톡히 하며 공감 능력이 뛰어납니다.',
      '하고 싶은 일은 당장 시작하지만 금방 흥미가 옮겨갈 수도 있어요!',
      '낙천적이고 긍정적인 바이브로 세상을 환하게 만듭니다.'
    ],
    celebs: ['뷔 (BTS)', '이효리', '싸이', '츄', '조이 (레드벨벳)'],
    best: 'INFJ',
    worst: 'ISTJ'
  },
  ENFJ: {
    emoji: '🌟',
    nickname: '모두를 이끄는 다정한 카리스마 리더',
    desc: '따뜻한 마음과 탁월한 리더십으로 다른 사람들의 잠재력을 끌어내고 긍정적인 변화를 이끕니다.',
    traits: [
      '주변 사람들의 감정과 성장에 깊은 관심을 가지고 도와줍니다.',
      '언변이 유창하고 모임의 화합을 이끄는 천부적인 리더예요.',
      '타인의 칭찬과 인정에 힘을 얻지만, 거절을 잘 못할 때가 있어요.',
      '모두가 행복한 이상적인 세상을 꿈꾸고 실천합니다.'
    ],
    celebs: ['지민 (BTS)', '강다니엘', '유재석', '신민아', '임시완'],
    best: 'INFP',
    worst: 'ISTP'
  },
  ENTP: {
    emoji: '🔥',
    nickname: '지칠 줄 모르는 번뜩이는 아이디어 뱅크',
    desc: '호기심이 끝이 없으며 끊임없이 새로운 관점을 탐구하고 재치 있는 토론을 즐기는 전략가입니다.',
    traits: [
      '두뇌 회전이 빠르고 창의적인 해결책을 기가 막히게 찾아냅니다.',
      '규칙과 틀에 얽매이는 것을 싫어하며 지적 토론을 즐깁니다.',
      '반짝이는 시작은 많지만 뒷마무리는 살짝 귀찮아할 수 있어요.',
      '자신감 넘치고 유쾌한 매력으로 사람들의 시선을 사로잡습니다.'
    ],
    celebs: ['이영지', '라미란', '제시', '육성재', '한예슬'],
    best: 'INFJ',
    worst: 'ISFJ'
  },
  ENTJ: {
    emoji: '👑',
    nickname: '목표를 향해 거침없이 질주하는 야망의 캡틴',
    desc: '철저한 기획과 확고한 결단력으로 큰 그림을 그리고 조직을 승리로 이끄는 타고난 지도자입니다.',
    traits: [
      '비효율적인 것을 못 참으며 명확한 목표 지향적 태도를 보입니다.',
      '도전 과제가 생기면 두려움 없이 적극적으로 돌파합니다.',
      '자기 관리가 철저하고 리더십이 매우 강력합니다.',
      '냉철해 보이지만 내 사람에게는 든든한 최고의 지원군이 되어줍니다.'
    ],
    celebs: ['지코', '티파니', '이특', '서현 (소녀시대)', '윤하'],
    best: 'INFP',
    worst: 'ISFP'
  },
  INFP: {
    emoji: '🌸',
    nickname: '낭만과 꿈을 품고 사는 감성 예술가',
    desc: '자신만의 깊은 내면 세계와 따뜻한 마음을 가진 순수한 영혼으로, 가치 있는 이상을 추구합니다.',
    traits: [
      '감수성이 풍부하고 타인의 아픔에 진심으로 눈물 흘릴 줄 압니다.',
      '조용해 보이지만 신념과 가치관에 대해서는 대단히 확고합니다.',
      '혼자만의 상상 시간과 예술적·철학적 힐링을 사랑합니다.',
      '마음이 통하는 소수의 사람들과 깊고 진솔한 관계를 맺습니다.'
    ],
    celebs: ['아이유', '정국 (BTS)', '백예린', '태민 (샤이니)', '선미'],
    best: 'ENFJ',
    worst: 'ESTJ'
  },
  INFJ: {
    emoji: '🔮',
    nickname: '통찰력 깊은 신비로운 마음의 수호자',
    desc: '사람에 대한 깊은 이해와 뚜렷한 통찰력을 바탕으로 조용히 세상을 더 나은 곳으로 변화시킵니다.',
    traits: [
      '타인의 감정과 속마음을 놀랍도록 예리하게 꿰뚫어 봅니다.',
      '겉은 부드럽고 차분하지만 내면에는 강력한 원칙과 이상이 있어요.',
      '사람을 좋아하면서도 혼자만의 재충전 시간이 반드시 필요합니다.',
      '진정성 있는 대화와 깊이 있는 영적 교감을 소중히 여깁니다.'
    ],
    celebs: ['태연 (소녀시대)', '차은우', '카이 (EXO)', '솔라 (마마무)', '강승윤'],
    best: 'ENFP',
    worst: 'ESTP'
  },
  INTP: {
    emoji: '🧩',
    nickname: '세상의 원리를 파헤치는 논리적 몽상가',
    desc: '끝없는 지적 호기심과 분석력으로 이론과 개념을 탐구하며 지적 유희를 즐기는 사색가입니다.',
    traits: [
      '논리적 모순을 귀신같이 찾아내며 분석하기를 좋아합니다.',
      '감정적인 위로보다는 정확한 팩트와 논리를 우선시합니다.',
      '관심 있는 분야에는 놀라운 집중력을 보이지만 일상사엔 덤덤해요.',
      '독창적이고 기발한 방식으로 복잡한 문제를 해결합니다.'
    ],
    celebs: ['진 (BTS)', '슈가 (BTS)', '기안84', '정은지', '이소라'],
    best: 'ENTJ',
    worst: 'ESFJ'
  },
  INTJ: {
    emoji: '♟️',
    nickname: '완벽한 설계를 그리는 마스터마인드 전략가',
    desc: '독립적인 사고와 냉철한 통찰력으로 먼 미래를 내다보고 체계적인 전략을 완성하는 설계자입니다.',
    traits: [
      '자신만의 높은 기준과 확고한 장기적 비전을 가지고 있습니다.',
      '쓸데없는 감정 소모나 비효율적인 관습을 단호히 거부합니다.',
      '지식 습득과 자기 발전에 엄청난 열정을 쏟아붓습니다.',
      '한번 마음먹은 목표는 치밀한 계획으로 반드시 성취해냅니다.'
    ],
    celebs: ['지드래곤 (GD)', '강동원', '류진 (ITZY)', '손나은', '보아'],
    best: 'ENFP',
    worst: 'ESFP'
  },
  ESFP: {
    emoji: '🎪',
    nickname: '무대를 사로잡는 파티의 주인공',
    desc: '지금 이 순간을 온몸으로 즐기며 주위 사람들에게 기쁨과 웃음을 선사하는 활력 넘치는 연예인입니다.',
    traits: [
      '센스 있는 유머와 사교성으로 어디서나 분위기를 띄웁니다.',
      '패션이나 미식 등 오감으로 즐기는 트렌드에 민감합니다.',
      '낙천적이고 쿨한 성격으로 스트레스를 오래 담아두지 않아요.',
      '사람들과 함께 맛있는 것을 먹고 웃을 때 가장 행복합니다.'
    ],
    celebs: ['비 (정지훈)', '백현 (EXO)', '수영 (소녀시대)', '주이', '비비'],
    best: 'ISFJ',
    worst: 'INTJ'
  },
  ESTP: {
    emoji: '⚡',
    nickname: '스릴과 스피드를 즐기는 모험가',
    desc: '행동이 앞서는 넘치는 에너지와 타고난 순발력으로 문제를 직접 부딪쳐 해결하는 실천가입니다.',
    traits: [
      '망설임 없이 결정을 내리고 몸으로 먼저 부딪쳐 봅니다.',
      '위기 상황에서도 당황하지 않고 기지를 발휘해 해결합니다.',
      '활동적이고 다이내믹한 스포츠나 액티비티를 즐깁니다.',
      '직설적이고 솔직한 화법으로 뒤끝 없이 깔끔합니다.'
    ],
    celebs: ['전현무', '효린', '연정훈', '경리', '정일우'],
    best: 'ISFJ',
    worst: 'INFJ'
  },
  ISFP: {
    emoji: '🎨',
    nickname: '따스하고 여유로운 평화주의자 예술가',
    desc: '온화하고 겸손하며 자신만의 감성과 미적 감각으로 세상을 아름답게 물들이는 힐러입니다.',
    traits: [
      '갈등과 다툼을 극도로 싫어하며 상대방을 편안하게 배려합니다.',
      '자연, 음악, 예술 등 감각적인 아름다움에 깊이 빠져듭니다.',
      '침대와 소파를 사랑하며 느긋하고 여유로운 일상을 추구합니다.',
      '자유롭고 유연한 태도로 삶을 소박하게 즐길 줄 압니다.'
    ],
    celebs: ['이미주', '설현', '슬기 (레드벨벳)', '유재석', '온유'],
    best: 'ESFJ',
    worst: 'ENTJ'
  },
  ISTP: {
    emoji: '🛠️',
    nickname: '손재주와 실용성의 끝판왕, 백과사전',
    desc: '과묵하지만 관찰력이 뛰어나며 호기심을 직접 분해하고 조립하며 탐구하는 만능 재주꾼입니다.',
    traits: [
      '불필요한 말과 행동을 아끼는 에너지 절약형 실용주의자입니다.',
      '기계, 도구, 손으로 만드는 작업에 탁월한 센스를 보입니다.',
      '위기 상황에서도 흔들리지 않는 침착함을 유지합니다.',
      '마이웨이 기질이 강해 간섭받는 것을 매우 싫어합니다.'
    ],
    celebs: ['박명수', '안유진 (IVE)', '홍진경', '김종민', '나연 (트와이스)'],
    best: 'ESFJ',
    worst: 'ENFJ'
  },
  ESFJ: {
    emoji: '🤝',
    nickname: '모두를 살뜰히 챙기는 친절한 마당발',
    desc: '동료애가 넘치고 조화로운 분위기를 만들어내며 주변 사람들을 살뜰히 챙기는 따뜻한 조력자입니다.',
    traits: [
      '타인의 필요와 감정을 기가 막히게 캐치하고 챙겨줍니다.',
      '예의와 약속을 중시하며 모임의 화합을 소중히 여깁니다.',
      '정이 많고 사람들과 소소한 일상을 나누는 것을 좋아합니다.',
      '칭찬과 감사의 말 한마디에 피로가 눈 녹듯 사라집니다.'
    ],
    celebs: ['제이홉 (BTS)', '박보검', '황광희', '혜리', '황민현'],
    best: 'ISFP',
    worst: 'INTP'
  },
  ESTJ: {
    emoji: '📋',
    nickname: '한 치의 오차도 없는 현실의 총사령관',
    desc: '철저한 현실 감각과 조직력으로 규칙과 질서를 확립하고 결과를 반드시 만들어내는 관리자입니다.',
    traits: [
      '체계적이고 명확한 규칙 아래 일할 때 최상의 능력을 발휘합니다.',
      '약속과 시간 엄수를 목숨처럼 중요하게 여깁니다.',
      '책임감이 매우 강해 맡은 일은 빈틈없이 완벽하게 처리합니다.',
      '직설적이지만 든든하고 신뢰할 수 있는 기둥 역할을 합니다.'
    ],
    celebs: ['김구라', '민호 (샤이니)', '한채영', '송은이', '데프콘'],
    best: 'ISFP',
    worst: 'INFP'
  },
  ISFJ: {
    emoji: '🛡️',
    nickname: '성실하고 헌신적인 따뜻한 수호천사',
    desc: '차분하고 헌신적이며 주변 사람들을 위해 묵묵히 정성과 사랑을 쏟는 신뢰할 수 있는 친구입니다.',
    traits: [
      '기억력이 뛰어나 지인들의 사소한 취향이나 기념일을 잘 기억합니다.',
      '자신의 공을 내세우지 않고 뒤에서 묵묵히 돕는 배려심이 있어요.',
      '안정적인 환경을 선호하며 성실하고 책임감이 투철합니다.',
      '상처받아도 속으로 삭이는 경향이 있어 가끔 위로가 필요해요.'
    ],
    celebs: ['다현 (트와이스)', '장도연', '최강창민', '태연', '안영미'],
    best: 'ESFP',
    worst: 'ENTP'
  },
  ISTJ: {
    emoji: '📐',
    nickname: '빈틈없는 원칙주의자, 인간 엑셀',
    desc: '매사 신중하고 철저하며 사실과 원칙에 입각하여 모든 일을 완벽하게 마무리하는 청렴결백한 모범생입니다.',
    traits: [
      '약속과 규칙은 무조건 지켜야 한다는 확고한 신념이 있습니다.',
      '정리정돈과 기록을 잘하며 오차 없이 계획을 실행합니다.',
      '감정에 휩쓸리지 않고 객관적이고 사실적인 데이터에 근거합니다.',
      '신뢰도가 100%에 달하는 가장 든든하고 듬직한 사람입니다.'
    ],
    celebs: ['차태현', '써니 (소녀시대)', '남윤수', '정찬우', '이원석'],
    best: 'ESFP',
    worst: 'ENFP'
  }
};

// ==========================================
// 3. 상태 관리 변수
// ==========================================
let currentQuestionIndex = 0;
let userAnswers = []; // 각 질문별 선택된 성향 ('E', 'I', etc.)
let currentMbtiResult = '';

// ==========================================
// 4. DOM 요소 참조
// ==========================================
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const btnStart = document.getElementById('btn-start');
const btnRestart = document.getElementById('btn-restart');
const btnShare = document.getElementById('btn-share');
const btnPrev = document.getElementById('btn-prev');

const questionCountEl = document.getElementById('question-count');
const progressPercentEl = document.getElementById('progress-percent');
const progressBarEl = document.getElementById('progress-bar');
const questionEmojiEl = document.getElementById('question-emoji');
const questionTitleEl = document.getElementById('question-title');

const btnOptionA = document.getElementById('btn-option-a');
const btnOptionB = document.getElementById('btn-option-b');
const optionATextEl = document.getElementById('option-a-text');
const optionBTextEl = document.getElementById('option-b-text');

const resultEmojiEl = document.getElementById('result-emoji');
const resultTypeEl = document.getElementById('result-type');
const resultNicknameEl = document.getElementById('result-nickname');
const resultDescEl = document.getElementById('result-desc');
const resultTraitsEl = document.getElementById('result-traits');
const resultCelebsEl = document.getElementById('result-celebs');
const matchBestNameEl = document.getElementById('match-best-name');
const matchWorstNameEl = document.getElementById('match-worst-name');
const toastEl = document.getElementById('toast');

// ==========================================
// 5. 이벤트 리스너 등록
// ==========================================
btnStart.addEventListener('click', startQuiz);
btnRestart.addEventListener('click', restartQuiz);
btnShare.addEventListener('click', copyShareLink);
btnPrev.addEventListener('click', goToPreviousQuestion);

btnOptionA.addEventListener('click', () => handleChoice('A'));
btnOptionB.addEventListener('click', () => handleChoice('B'));

// ==========================================
// 6. 화면 전환 및 퀴즈 로직 함수
// ==========================================

// 테스트 시작
function startQuiz() {
  currentQuestionIndex = 0;
  userAnswers = [];
  
  startScreen.classList.remove('active');
  startScreen.classList.add('hidden');

  resultScreen.classList.remove('active');
  resultScreen.classList.add('hidden');

  quizScreen.classList.remove('hidden');
  quizScreen.classList.add('active');

  renderQuestion();
}

// 질문 렌더링
function renderQuestion() {
  const currentQ = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progressPercent = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  // 진행률 업데이트
  const currentQFormatted = String(currentQuestionIndex + 1).padStart(2, '0');
  questionCountEl.textContent = `Q. ${currentQFormatted} / ${totalQuestions}`;
  progressPercentEl.textContent = `${progressPercent}%`;
  progressBarEl.style.width = `${progressPercent}%`;

  // 이전 질문 버튼 표시 여부
  if (currentQuestionIndex > 0) {
    btnPrev.classList.remove('hidden');
  } else {
    btnPrev.classList.add('hidden');
  }

  // 문항 내용 업데이트 (부드러운 애니메이션 효과)
  const questionContainer = document.getElementById('question-container');
  questionContainer.style.opacity = '0';
  questionContainer.style.transform = 'translateY(6px)';

  setTimeout(() => {
    questionEmojiEl.textContent = currentQ.emoji;
    questionTitleEl.textContent = currentQ.question;
    optionATextEl.textContent = currentQ.choiceA.text;
    optionBTextEl.textContent = currentQ.choiceB.text;

    questionContainer.style.transition = 'all 0.25s ease';
    questionContainer.style.opacity = '1';
    questionContainer.style.transform = 'translateY(0)';
  }, 100);
}

// 선택지 클릭 처리
function handleChoice(choice) {
  const currentQ = questions[currentQuestionIndex];
  const selectedType = choice === 'A' ? currentQ.choiceA.type : currentQ.choiceB.type;

  // 답변 저장 (기존 인덱스 덮어쓰기)
  userAnswers[currentQuestionIndex] = selectedType;

  // 다음 질문으로 이동 or 결과 계산
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    calculateAndShowResult();
  }
}

// 이전 질문으로 이동
function goToPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

// MBTI 결과 계산 및 출력
function calculateAndShowResult() {
  // 성향 카운트 객체
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  userAnswers.forEach(ans => {
    if (scores[ans] !== undefined) {
      scores[ans]++;
    }
  });

  // 최종 4자리 MBTI 조합
  const mbti = [
    scores.E >= scores.I ? 'E' : 'I',
    scores.S >= scores.N ? 'S' : 'N',
    scores.T >= scores.F ? 'T' : 'F',
    scores.J >= scores.P ? 'J' : 'P'
  ].join('');

  currentMbtiResult = mbti;
  const resultInfo = mbtiResults[mbti] || mbtiResults['ENFP'];

  // 화면 전환
  quizScreen.classList.remove('active');
  quizScreen.classList.add('hidden');

  resultScreen.classList.remove('hidden');
  resultScreen.classList.add('active');

  // 데이터 바인딩
  resultEmojiEl.textContent = resultInfo.emoji;
  resultTypeEl.textContent = mbti;
  resultNicknameEl.textContent = resultInfo.nickname;
  resultDescEl.textContent = resultInfo.desc;

  // 특징 리스트 생성
  resultTraitsEl.innerHTML = '';
  resultInfo.traits.forEach(trait => {
    const li = document.createElement('li');
    li.textContent = trait;
    resultTraitsEl.appendChild(li);
  });

  // 같은 유형 연예인 태그 생성
  resultCelebsEl.innerHTML = '';
  if (resultInfo.celebs && resultInfo.celebs.length > 0) {
    resultInfo.celebs.forEach(celeb => {
      const span = document.createElement('span');
      span.className = 'celeb-tag';
      span.textContent = celeb;
      resultCelebsEl.appendChild(span);
    });
  }

  // 찰떡 궁합
  matchBestNameEl.textContent = resultInfo.best;
  matchWorstNameEl.textContent = resultInfo.worst;

  // 스크롤 상단 이동
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // 축하 폭죽 애니메이션 실행 🎉
  fireConfetti();
}

// 다시 테스트하기
function restartQuiz() {
  resultScreen.classList.remove('active');
  resultScreen.classList.add('hidden');

  startScreen.classList.remove('hidden');
  startScreen.classList.add('active');

  currentQuestionIndex = 0;
  userAnswers = [];
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 결과 링크 복사 및 공유 토스트
function copyShareLink() {
  const resultInfo = mbtiResults[currentMbtiResult];
  const celebsText = resultInfo?.celebs ? `\n⭐ 같은 유형 연예인: ${resultInfo.celebs.slice(0, 3).join(', ')} 등` : '';
  const shareText = `[나의 MBTI 테스트 결과]\n내 유형은 바로 '${currentMbtiResult} - ${resultInfo?.nickname || ''}' 입니다!${celebsText}\n너도 어떤 성향인지 지금 바로 테스트해봐! 👉 ${window.location.href}`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(shareText).then(() => {
      showToast('결과가 클립보드에 복사되었습니다! 🎉');
    }).catch(() => {
      fallbackCopy(shareText);
    });
  } else {
    fallbackCopy(shareText);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showToast('결과가 클립보드에 복사되었습니다! 🎉');
  } catch (err) {
    showToast('복사에 실패했습니다.');
  }
  document.body.removeChild(textArea);
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add('show');
  setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2400);
}

// 팡팡 터지는 폭죽 축하 효과
function fireConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 250);
  }
}
