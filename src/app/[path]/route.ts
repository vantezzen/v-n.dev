export async function GET(
  req: Request,
  {
    params: { path },
  }: {
    params: {
      path: string;
    };
  }
) {
  const domain = req.headers.get("host") || "vantezzen.io";
  const subdomain = domain.split(".")[0];

  if (subdomain === "gh") {
    return Response.redirect(`https://github.com/vantezzen/${path}`, 301);
  }

  if (subdomain === "npm") {
    return Response.redirect(
      `https://www.npmjs.com/package/@vantezzen/${path}`,
      301
    );
  }

  return Response.redirect(`https://${path}.vantezzen.io`, 301);
}
