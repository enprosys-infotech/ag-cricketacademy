<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Brand names, stats and nav live in src/lib/site.ts so content stays editable until the admin portal (later phase) takes over.
- Shared site chrome (SiteHeader/SiteFooter) is rendered in __root around <Outlet /> so every page shares it.
