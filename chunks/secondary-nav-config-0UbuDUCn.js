function getMonthName(month, locale, short = true) {
  const monthNames = {
    en: {
      short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    pl: {
      short: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
      long: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]
    }
  };
  const names = short ? monthNames[locale].short : monthNames[locale].long;
  return names[month - 1] || "";
}
function createArchiveDropdowns(years, yearMonths, locale, currentPath, options = {}) {
  const { basePath = `/${locale}/thoughts` } = options;
  const labels = {
    en: {
      selectYear: "Select year",
      selectMonth: "Select month",
      year: "Year",
      month: "Month"
    },
    pl: {
      selectYear: "Wybierz rok",
      selectMonth: "Wybierz miesiąc",
      year: "Rok",
      month: "Miesiąc"
    }
  };
  const t = labels[locale];
  const dropdowns = [];
  if (years.length > 0) {
    dropdowns.push({
      label: t.year,
      placeholder: t.selectYear,
      options: years.map((year) => ({
        label: year.toString(),
        value: year.toString(),
        href: `${basePath}/year/${year}`
      }))
    });
  }
  const yearMatch = currentPath.match(/\/year\/(\d{4})/);
  if (yearMatch) {
    const currentYear = parseInt(yearMatch[1]);
    const monthsForYear = yearMonths.filter((ym) => ym.year === currentYear);
    if (monthsForYear.length > 0) {
      dropdowns.push({
        label: t.month,
        placeholder: t.selectMonth,
        options: monthsForYear.sort((a, b) => b.month - a.month).map((ym) => ({
          label: getMonthName(ym.month, locale, false),
          value: `${ym.year}-${String(ym.month).padStart(2, "0")}`,
          href: `${basePath}/year/${ym.year}/${String(ym.month).padStart(2, "0")}`
        }))
      });
    }
  }
  return dropdowns;
}
function createThoughtsNavConfig(locale, years, yearMonths = [], options = {}) {
  const {
    showArchive = true,
    showMonthly = true,
    showTagsMap = true,
    currentPath = ""
  } = options;
  const labels = {
    en: {
      tagsMap: "Tags Map",
      allPosts: "All Posts"
    },
    pl: {
      tagsMap: "Mapa tagów",
      allPosts: "Wszystkie posty"
    }
  };
  const t = labels[locale];
  const basePath = `/${locale}/thoughts`;
  const links = [
    {
      label: t.allPosts,
      href: basePath
    }
  ];
  if (showTagsMap) {
    links.push({
      label: t.tagsMap,
      href: `${basePath}/tags-map`
    });
  }
  const dropdowns = showArchive ? createArchiveDropdowns(years, yearMonths, locale, currentPath, {
    basePath
  }) : [];
  return {
    links,
    dropdowns,
    centered: true
  };
}
function createAboutNavConfig(locale, options = {}) {
  const {
    showSummary = true,
    showExperience = true,
    showSkills = true,
    showAchievements = true,
    showHealth = true,
    additionalLinks = []
  } = options;
  const labels = {
    en: {
      summary: "Summary",
      experience: "Experience",
      skills: "Skills",
      achievements: "Achievements",
      health: "Health"
    },
    pl: {
      summary: "Podsumowanie",
      experience: "Doświadczenie",
      skills: "Umiejętności",
      achievements: "Osiągnięcia",
      health: "Zdrowie"
    }
  };
  const t = labels[locale];
  const basePath = `/${locale}/about`;
  const links = [];
  if (showSummary) {
    links.push({
      label: t.summary,
      href: basePath,
      exact: true
      // Only match exactly /about, not /about/experience etc.
    });
  }
  if (showExperience) {
    links.push({
      label: t.experience,
      href: `${basePath}/experience`
    });
  }
  if (showSkills) {
    links.push({
      label: t.skills,
      href: `${basePath}/skills`
    });
  }
  if (showAchievements) {
    links.push({
      label: t.achievements,
      href: `${basePath}/achievements`
    });
  }
  if (showHealth) {
    links.push({
      label: t.health,
      href: `${basePath}/health`
    });
  }
  links.push(...additionalLinks);
  return {
    links,
    groups: [],
    centered: true
  };
}

export { createThoughtsNavConfig as a, createAboutNavConfig as c };
