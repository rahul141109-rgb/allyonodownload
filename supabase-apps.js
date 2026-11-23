(function () {
  const SUPABASE_URL = "https://ygrktvzrlcomugutbmpo.supabase.co";
  const SUPABASE_KEY = "sb_publishable_ApR0JphkNeyHj8Ul993TPQ_JLZaUo6T";

  function loadSupabase() {
    return new Promise((resolve, reject) => {
      if (window.supabase) return resolve();

      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function loadApps() {
    try {
      await loadSupabase();

      const db = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
      );

      const { data, error } = await db
        .from("apps")
        .select("id,name,description,category,icon,download_url,version,created_at")
        .order("created_at", { ascending: false });

      if (error) throw error;

      const newApps = data.map(app => ({
        name: app.name || "",
        category: app.category || "",
        version: app.version || "",
        logo: app.icon || "logos.png",
        link: app.download_url || "#",
        description: app.description || ""
      }));

      // Latest Supabase apps first, followed by existing apps
      apps = [...newApps, ...apps];

      filteredApps = [...apps];
      currentPage = 1;

      appCount.textContent = apps.length;
      renderApps();

      console.log("Supabase apps loaded:", newApps.length);

    } catch (error) {
      console.error("Could not load Supabase apps:", error);
    }
  }

  loadApps();
})();
