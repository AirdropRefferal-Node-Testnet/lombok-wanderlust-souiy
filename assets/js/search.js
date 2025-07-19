// Search Suggestions
const destinations = [
  "Gili Trawangan", "Senggigi", "Kuta Lombok", 
  "Mandalika", "Sembalun", "Gili Air", 
  "Gili Meno", "Mataram", "Selong Belanak", 
  "Desa Sade"
];

function showSuggestions(val) {
  const list = document.getElementById('suggestion-list');
  if (!val.trim()) {
    list.innerHTML = '';
    list.style.display = 'none';
    return;
  }
  
  let filtered = destinations.filter(dest => 
    dest.toLowerCase().includes(val.toLowerCase())
  );
  
  if (filtered.length > 0) {
    list.innerHTML = filtered.map(d => 
      `<li class="px-4 py-2 cursor-pointer hover:bg-blue-100" 
        onclick="selectSuggestion('${d}')">${d}</li>`
    ).join('');
    list.style.display = 'block';
  } else {
    list.innerHTML = '<li class="px-4 py-2 text-gray-400">Tidak ditemukan</li>';
    list.style.display = 'block';
  }
}

function selectSuggestion(txt) {
  document.getElementById('tujuan').value = txt;
  document.getElementById('suggestion-list').style.display = 'none';
}

// Close suggestions when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.search-suggestion')) {
    document.getElementById('suggestion-list').style.display = 'none';
  }
});
