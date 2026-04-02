const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 페이지 로드 시 저장된 테마 불러오기
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // 테마 상태 저장
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
