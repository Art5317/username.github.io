const lifeCards = [
  { title: "授業・単位", text: "必修・選択の構成、レポート提出、評価方法を確認。" },
  { title: "部活動・委員会", text: "活動日・参加条件・時間帯を事前に確認。" },
  { title: "給食・食事", text: "提供の有無、利用方法、費用をチェック。" },
  { title: "校則・生活ルール", text: "服装・スマホ利用・アルバイト規定などを把握。" },
  { title: "通学", text: "最寄り駅・バス停、夜間の安全な経路を確認。" },
  { title: "卒業後の進路", text: "進学・就職の割合、指定校推薦や求人状況を確認。" }
];

const container = document.getElementById("lifeCards");

lifeCards.forEach((item) => {
  const card = document.createElement("article");
  card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
  container.appendChild(card);
});
