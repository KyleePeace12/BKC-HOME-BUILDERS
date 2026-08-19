(function () {
  var gallery = document.querySelector('[data-project-gallery]');
  if (!gallery || !window.fetch) return;

  fetch('content/project-gallery.json', { cache: 'no-store' })
    .then(function (response) {
      if (!response.ok) throw new Error('Gallery data unavailable');
      return response.json();
    })
    .then(function (data) {
      if (!data || !Array.isArray(data.projects) || !data.projects.length) return;
      var fragment = document.createDocumentFragment();
      data.projects.forEach(function (project) {
        if (!project || !project.image) return;
        var figure = document.createElement('figure');
        var img = document.createElement('img');
        var caption = document.createElement('figcaption');
        img.src = String(project.image).replace(/^\//, '');
        img.alt = project.alt || project.title || 'BKC Home Builders project';
        img.loading = 'lazy';
        caption.textContent = project.title || 'BKC Home Builders Project';
        figure.appendChild(img);
        figure.appendChild(caption);
        fragment.appendChild(figure);
      });
      if (fragment.childNodes.length) {
        gallery.innerHTML = '';
        gallery.appendChild(fragment);
      }
    })
    .catch(function () {
      // Keep the built-in HTML gallery as a fallback for local Dreamweaver/file previews.
    });
})();
