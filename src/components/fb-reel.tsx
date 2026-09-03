export function FbReel({ id, title, width = 476 }: { id: string; title: string; width?: number }) {
  const href = encodeURIComponent(`https://www.facebook.com/reel/${id}/`);
  return (
    <figure className="lift overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-slate-950">
        <iframe
          src={`https://www.facebook.com/plugins/video.php?height=476&href=${href}&show_text=false&width=${width}&t=0`}
          width={width}
          height={476}
          title={title}
          loading="lazy"
          style={{ border: "none", overflow: "hidden", width: "100%", maxWidth: "100%", display: "block" }}
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <figcaption className="px-4 py-3 text-sm font-medium text-slate-800">{title}</figcaption>
    </figure>
  );
}
