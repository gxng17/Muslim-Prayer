export const prayerTimes = [
{ id: 1, name: "Fajr", arabicName: "الفجر", time: "05:23", completed: false, icon: "Sunrise" },
{ id: 2, name: "Dhuhr", arabicName: "الظهر", time: "12:47", completed: false, icon: "Sun" },
{ id: 3, name: "Asr", arabicName: "العصر", time: "15:58", completed: false, icon: "CloudSun" },
{ id: 4, name: "Maghrib", arabicName: "المغرب", time: "18:34", completed: false, icon: "Sunset" },
{ id: 5, name: "Isha", arabicName: "العشاء", time: "20:02", completed: false, icon: "Moon" }];


export const prayerGoals = [
{ id: 1, title: "Pray all 5 daily prayers on time", category: "Daily", targetDays: 30, completedDays: 18, status: "in-progress", startDate: "2025-06-01", notes: "Focus on Fajr consistency" },
{ id: 2, title: "Complete Tahajjud 3 nights per week", category: "Voluntary", targetDays: 12, completedDays: 12, status: "completed", startDate: "2025-05-01", notes: "Alhamdulillah, goal achieved" },
{ id: 3, title: "Pray Sunnah prayers before Dhuhr", category: "Sunnah", targetDays: 30, completedDays: 7, status: "in-progress", startDate: "2025-06-15", notes: "4 rakaat before Dhuhr" },
{ id: 4, title: "Memorize Surah Al-Mulk", category: "Quran", targetDays: 21, completedDays: 21, status: "completed", startDate: "2025-04-10", notes: "Recite in Isha prayer" },
{ id: 5, title: "Pray Witr every night", category: "Voluntary", targetDays: 30, completedDays: 22, status: "in-progress", startDate: "2025-06-01", notes: "At least 1 rakaat" },
{ id: 6, title: "Attend Jumu'ah prayer weekly", category: "Weekly", targetDays: 8, completedDays: 3, status: "in-progress", startDate: "2025-05-16", notes: "Arrive early for khutbah" },
{ id: 7, title: "Pray Duha prayer daily", category: "Voluntary", targetDays: 14, completedDays: 0, status: "not-started", startDate: "2025-07-01", notes: "2–8 rakaat after sunrise" },
{ id: 8, title: "Recite Ayatul Kursi after every prayer", category: "Dhikr", targetDays: 30, completedDays: 30, status: "completed", startDate: "2025-05-01", notes: "Protection and barakah" },
{ id: 9, title: "Pray Fajr in congregation at masjid", category: "Congregation", targetDays: 20, completedDays: 5, status: "in-progress", startDate: "2025-06-10", notes: "Reward of full night prayer" },
{ id: 10, title: "Complete 100 tasbeeh after each prayer", category: "Dhikr", targetDays: 30, completedDays: 14, status: "in-progress", startDate: "2025-06-01", notes: "SubhanAllah, Alhamdulillah, Allahu Akbar" }];


export const inspirationalContent = [
{
  id: 1,
  type: "hadith",
  title: "On the Importance of Prayer",
  content: "The first matter that the slave will be brought to account for on the Day of Judgment is the prayer. If it is sound, then the rest of his deeds will be sound. And if it is bad, then the rest of his deeds will be bad.",
  source: "At-Tabarani",
  category: "Prayer",
  isFeatured: true,
  date: "2025-07-01"
},
{
  id: 2,
  type: "quran",
  title: "Seek Help Through Patience and Prayer",
  content: "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.",
  source: "Quran 2:153",
  category: "Patience",
  isFeatured: false,
  date: "2025-06-30"
},
{
  id: 3,
  type: "hadith",
  title: "Prayer as a Light",
  content: "Prayer is a light, charity is a proof, patience is illumination, and the Quran is an argument for or against you.",
  source: "Sahih Muslim",
  category: "Prayer",
  isFeatured: false,
  date: "2025-06-29"
},
{
  id: 4,
  type: "quran",
  title: "Establish Prayer for My Remembrance",
  content: "Indeed, I am Allah. There is no deity except Me, so worship Me and establish prayer for My remembrance.",
  source: "Quran 20:14",
  category: "Worship",
  isFeatured: false,
  date: "2025-06-28"
},
{
  id: 5,
  type: "hadith",
  title: "The Coolness of the Eyes",
  content: "Prayer was made the coolness of my eyes.",
  source: "An-Nasa'i",
  category: "Prayer",
  isFeatured: false,
  date: "2025-06-27"
},
{
  id: 6,
  type: "quran",
  title: "Guard the Prayers",
  content: "Maintain with care the [obligatory] prayers and [in particular] the middle prayer and stand before Allah, devoutly obedient.",
  source: "Quran 2:238",
  category: "Prayer",
  isFeatured: false,
  date: "2025-06-26"
},
{
  id: 7,
  type: "hadith",
  title: "Between a Man and Shirk",
  content: "Between a man and shirk and kufr there stands his neglect of the prayer.",
  source: "Sahih Muslim",
  category: "Faith",
  isFeatured: false,
  date: "2025-06-25"
},
{
  id: 8,
  type: "quran",
  title: "Prayer Prevents Immorality",
  content: "Recite, [O Muhammad], what has been revealed to you of the Book and establish prayer. Indeed, prayer prohibits immorality and wrongdoing, and the remembrance of Allah is greater.",
  source: "Quran 29:45",
  category: "Character",
  isFeatured: false,
  date: "2025-06-24"
},
{
  id: 9,
  type: "hadith",
  title: "The Five Prayers as Expiation",
  content: "The five prayers and the Friday prayer until the next Friday prayer are expiation for whatever sins come between them, as long as one does not commit a major sin.",
  source: "Sahih Muslim",
  category: "Forgiveness",
  isFeatured: false,
  date: "2025-06-23"
},
{
  id: 10,
  type: "quran",
  title: "Those Who Are Heedless of Prayer",
  content: "So woe to those who pray but are heedless of their prayer — those who make a show of piety and withhold small acts of kindness.",
  source: "Quran 107:4–7",
  category: "Sincerity",
  isFeatured: false,
  date: "2025-06-22"
},
{
  id: 11,
  type: "hadith",
  title: "Whoever Prays Fajr",
  content: "Whoever prays the Fajr prayer is under the protection of Allah. So beware, O son of Adam, that Allah does not call you to account for being absent from His protection.",
  source: "Sahih Muslim",
  category: "Fajr",
  isFeatured: false,
  date: "2025-06-21"
},
{
  id: 12,
  type: "quran",
  title: "Remembrance of Allah",
  content: "Verily, in the remembrance of Allah do hearts find rest.",
  source: "Quran 13:28",
  category: "Dhikr",
  isFeatured: false,
  date: "2025-06-20"
}];


export const recentActivity = [
{ id: 1, action: "Completed Fajr prayer", timestamp: "Today, 05:25 AM", type: "prayer" },
{ id: 2, action: "Goal 'Pray all 5 daily prayers' updated — Day 18", timestamp: "Today, 12:50 PM", type: "goal" },
{ id: 3, action: "Read today's hadith on prayer", timestamp: "Today, 09:10 AM", type: "content" },
{ id: 4, action: "Completed Dhuhr prayer", timestamp: "Today, 12:49 PM", type: "prayer" },
{ id: 5, action: "Added new goal: Pray Duha prayer daily", timestamp: "Yesterday, 08:30 PM", type: "goal" },
{ id: 6, action: "Completed Asr prayer", timestamp: "Yesterday, 04:02 PM", type: "prayer" },
{ id: 7, action: "Goal 'Memorize Surah Al-Mulk' marked complete", timestamp: "Yesterday, 10:15 PM", type: "goal" },
{ id: 8, action: "Completed Maghrib prayer", timestamp: "Yesterday, 06:37 PM", type: "prayer" }];