globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, u as unescapeHTML, d as renderScript, e as createAstro, F as Fragment, f as renderSlot, s as spreadAttributes, g as renderHead } from '../chunks/astro/server_Bvfdevhj.mjs';
import { s as styles, a as styles$1, b as styles$2, c as styles$3, d as styles$4, e as styles$5, f as styles$6, g as styles$7, h as styles$8, i as styles$9, j as styles$a, k as styles$b, l as styles$c, m as styles$d, n as styles$e, o as styles$f, p as styles$g, q as styles$h, r as styles$i, t as styles$j, u as styles$k, v as styles$l, w as styles$m, x as styles$n, y as styles$o, z as styles$p, A as styles$q, B as styles$r, C as styles$s, D as styles$t, E as styles$u, F as styles$v, G as styles$w, H as styles$x, I as styles$y, J as styles$z, K as styles$A, L as styles$B, M as styles$C, N as styles$D, O as styles$E, P as styles$F, Q as styles$G, R as styles$H, S as styles$I } from '../chunks/index.95d291e9_wGvXL3br.mjs';
export { renderers } from '../renderers.mjs';

const ArrowDown = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.360618 6.42142C0.864272 5.88419 1.70806 5.85699 2.24526 6.36062L12 15.5057L21.7547 6.36062C22.292 5.85699 23.1358 5.88419 23.6395 6.42142C24.143 6.95865 24.1158 7.80243 23.5787 8.30606L12.9119 18.3062C12.3991 18.787 11.601 18.787 11.0881 18.3062L0.421418 8.30606C-0.11581 7.80243 -0.143009 6.95865 0.360618 6.42142Z\" fill=\"currentColor\" />\r\n</svg>\r\n";

const Plus = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M23 12H12M12 12H1M12 12V1M12 12V23\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n</svg>\r\n";

const $$Astro$N = createAstro();
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$N, $$props, $$slots);
  Astro2.self = $$Accordion;
  const {
    items,
    icon,
    reverse,
    className
  } = Astro2.props;
  const classes = [
    styles.accordion,
    reverse && styles.reverse,
    icon === "plus" && styles.plus,
    className
  ];
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(classes, "class:list")} data-id="w-accordion"> ${items.map((item) => renderTemplate`<li> <button${addAttribute([styles.title, item.reverse && styles.reverse], "class:list")} data-toggle="true"> ${item.title} ${icon !== "none" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(icon === "plus" ? Plus : ArrowDown)}` })}`} </button> <div${addAttribute(styles.wrapper, "class")}> <div${addAttribute(styles.content, "class")}>${unescapeHTML(item.content)}</div> </div> </li>`)} </ul> ${renderScript($$result, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Accordion/Accordion.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Accordion/Accordion.astro", void 0);

const $$Astro$M = createAstro();
const $$ConditionalWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$M, $$props, $$slots);
  Astro2.self = $$ConditionalWrapper;
  const { condition } = Astro2.props;
  const wrapper = await Astro2.slots.render("wrapper");
  const children = await Astro2.slots.render("default");
  const wrapped = wrapper?.replace("children", children);
  if (!Astro2.slots.has("wrapper")) {
    console.error('Missing wrapper. Add slot="wrapper" to one of the elements.');
  }
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(condition ? wrapped : children)}` })}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/ConditionalWrapper/ConditionalWrapper.astro", void 0);

const alert = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.48872 2.15394C7.48856 2.1541 7.48888 2.15378 7.48872 2.15394L2.15302 7.48964C1.99269 7.64997 1.93416 7.74684 1.9045 7.81776C1.87504 7.88818 1.84615 7.99973 1.84615 8.23015V15.7698C1.84615 15.9963 1.8732 16.1054 1.90221 16.1759C1.93113 16.2463 1.9898 16.3459 2.15425 16.5104L7.48964 21.847C7.48966 21.847 7.48961 21.847 7.48964 21.847C7.64992 22.0073 7.74685 22.0658 7.81776 22.0955C7.88818 22.125 7.99973 22.1538 8.23015 22.1538H15.7698C15.9964 22.1538 16.1061 22.1268 16.1771 22.0976C16.2477 22.0687 16.3471 22.0102 16.5104 21.847L21.847 16.5104C22.0073 16.35 22.0658 16.2532 22.0955 16.1822C22.125 16.1118 22.1538 16.0003 22.1538 15.7698V8.23015C22.1538 8.00362 22.1268 7.89393 22.0976 7.82287C22.0687 7.75228 22.0102 7.65286 21.847 7.48964L16.5104 2.15302C16.3471 1.9898 16.2477 1.9313 16.1771 1.90235C16.1061 1.87321 15.9964 1.84615 15.7698 1.84615H8.23015C8.0037 1.84615 7.89439 1.87319 7.82354 1.90227C7.75298 1.93123 7.65289 1.99031 7.48872 2.15394ZM7.12261 0.194349C7.48962 0.0437307 7.85846 0 8.23015 0H15.7698C16.1415 0 16.5105 0.0437121 16.8776 0.194263C17.2452 0.345007 17.5433 0.575125 17.8158 0.847594L23.1524 6.18421C23.4249 6.45668 23.655 6.75479 23.8057 7.12236C23.9563 7.48946 24 7.85853 24 8.23015V15.7698C24 16.1548 23.952 16.5282 23.7987 16.8947C23.6455 17.2607 23.4155 17.5527 23.1524 17.8158L17.8158 23.1524C17.5433 23.4249 17.2452 23.655 16.8776 23.8057C16.5105 23.9563 16.1415 24 15.7698 24H8.23015C7.84519 24 7.47182 23.952 7.10532 23.7987C6.73932 23.6455 6.44726 23.4155 6.18421 23.1524L0.848825 17.8158C0.8488 17.8158 0.84885 17.8158 0.848825 17.8158C0.576388 17.5433 0.345783 17.2454 0.194714 16.8779C0.0437194 16.5106 0 16.1415 0 15.7698V8.23015C0 7.84519 0.0480391 7.47182 0.20135 7.10532C0.354452 6.73932 0.58454 6.44726 0.847594 6.18421L6.18513 0.846674C6.45759 0.574982 6.7554 0.345054 7.12261 0.194349ZM12 5.69477C12.5098 5.69477 12.9231 6.10804 12.9231 6.61785V13.3871C12.9231 13.8969 12.5098 14.3102 12 14.3102C11.4902 14.3102 11.0769 13.8969 11.0769 13.3871V6.61785C11.0769 6.10804 11.4902 5.69477 12 5.69477ZM12 15.8437C12.5098 15.8437 12.9231 16.257 12.9231 16.7668V17.3822C12.9231 17.892 12.5098 18.3052 12 18.3052C11.4902 18.3052 11.0769 17.892 11.0769 17.3822V16.7668C11.0769 16.257 11.4902 15.8437 12 15.8437Z\" fill=\"currentColor\"/>\r\n</svg>\r\n";

const success = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.6425 7.92858C17.0558 8.22704 17.1489 8.80404 16.8505 9.21734L12.4237 15.3474C12.4236 15.3475 12.4238 15.3473 12.4237 15.3474C12.2341 15.6102 11.9873 15.8271 11.7024 15.9814C11.4174 16.1357 11.1011 16.2237 10.7773 16.2389C10.4535 16.254 10.1304 16.1958 9.83224 16.0687C9.53413 15.9416 9.26855 15.7489 9.05527 15.5049C9.0552 15.5048 9.05534 15.505 9.05527 15.5049L7.20296 13.3867C6.86736 13.003 6.90641 12.4198 7.29017 12.0842C7.67393 11.7486 8.25709 11.7877 8.59268 12.1714L10.445 14.2896C10.4755 14.3245 10.5136 14.3522 10.5562 14.3704C10.5988 14.3886 10.645 14.3969 10.6912 14.3947C10.7375 14.3925 10.7827 14.38 10.8234 14.3579C10.8641 14.3359 10.8993 14.3049 10.9264 14.2674L15.3538 8.13651C15.6522 7.72321 16.2292 7.63012 16.6425 7.92858Z\" fill=\"currentColor\"/>\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 1.84615C6.39219 1.84615 1.84615 6.39219 1.84615 12C1.84615 17.6078 6.39219 22.1538 12 22.1538C17.6078 22.1538 22.1538 17.6078 22.1538 12C22.1538 6.39219 17.6078 1.84615 12 1.84615ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z\" fill=\"currentColor\"/>\r\n</svg>\r\n";

const info = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 6.15381C12.5098 6.15381 12.9231 6.56708 12.9231 7.07689V7.69227C12.9231 8.20207 12.5098 8.61535 12 8.61535C11.4902 8.61535 11.0769 8.20207 11.0769 7.69227V7.07689C11.0769 6.56708 11.4902 6.15381 12 6.15381ZM10.4615 10.7692C10.4615 10.2594 10.8748 9.84612 11.3846 9.84612H12C12.5098 9.84612 12.9231 10.2594 12.9231 10.7692V16.0525C13.2816 16.1792 13.5385 16.5211 13.5385 16.923C13.5385 17.4328 13.1252 17.8461 12.6154 17.8461H11.3846C10.8748 17.8461 10.4615 17.4328 10.4615 16.923C10.4615 16.5211 10.7184 16.1792 11.0769 16.0525V11.6397C10.7184 11.513 10.4615 11.1711 10.4615 10.7692Z\" fill=\"currentColor\"/>\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.5084 0.0701433C17.6498 -1.24757e-05 16.5847 -6.90184e-06 15.2406 1.40675e-07H8.75939C7.41534 -6.90184e-06 6.3502 -1.24757e-05 5.4916 0.0701433C4.61356 0.141887 3.87051 0.291634 3.192 0.63723C2.09202 1.19771 1.19765 2.09215 0.637165 3.19213C0.29157 3.87064 0.141887 4.61356 0.0701433 5.4916C-1.24757e-05 6.3502 -6.90184e-06 7.41534 1.40675e-07 8.75939V15.2406C-6.90184e-06 16.5847 -1.24757e-05 17.6498 0.0701433 18.5084C0.141887 19.3864 0.291634 20.1295 0.63723 20.808C1.19771 21.908 2.09215 22.8024 3.19213 23.3628C3.87064 23.7084 4.61356 23.8581 5.4916 23.9299C6.35019 24 7.41532 24 8.75937 24H15.2406C16.5847 24 17.6498 24 18.5084 23.9299C19.3864 23.8581 20.1295 23.7084 20.808 23.3628C21.908 22.8023 22.8024 21.9078 23.3628 20.8079C23.7084 20.1294 23.8581 19.3864 23.9299 18.5084C24 17.6498 24 16.5847 24 15.2406V8.75937C24 7.41532 24 6.35019 23.9299 5.4916C23.8581 4.61356 23.7084 3.87051 23.3628 3.192C22.8023 2.09202 21.9079 1.19765 20.8079 0.637165C20.1294 0.29157 19.3864 0.141887 18.5084 0.0701433ZM4.03016 2.28216C4.40516 2.09117 4.87822 1.97257 5.64194 1.91017C6.41655 1.84687 7.40631 1.84615 8.8 1.84615H15.2C16.5937 1.84615 17.5834 1.84687 18.3581 1.91017C19.1219 1.97258 19.5949 2.0912 19.97 2.28222C20.7225 2.66571 21.3344 3.27758 21.7178 4.03016C21.9088 4.40516 22.0274 4.87822 22.0898 5.64194C22.1531 6.41656 22.1538 7.40631 22.1538 8.8V15.2C22.1538 16.5937 22.1531 17.5834 22.0898 18.3581C22.0274 19.1218 21.9088 19.5948 21.7178 19.9698C21.3344 20.7225 20.7225 21.3344 19.9698 21.7178C19.5948 21.9088 19.1218 22.0274 18.3581 22.0898C17.5834 22.1531 16.5937 22.1538 15.2 22.1538H8.8C7.40631 22.1538 6.41656 22.1531 5.64194 22.0898C4.87822 22.0274 4.40516 21.9088 4.03016 21.7178C3.27758 21.3344 2.66571 20.7225 2.28222 19.97C2.0912 19.5949 1.97258 19.1219 1.91017 18.3581C1.84687 17.5834 1.84615 16.5937 1.84615 15.2V8.8C1.84615 7.40631 1.84687 6.41655 1.91017 5.64194C1.97257 4.87822 2.09117 4.40516 2.28216 4.03016C2.66563 3.27764 3.27764 2.66563 4.03016 2.28216Z\" fill=\"currentColor\"/>\r\n</svg>\r\n";

const warning = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.9222 8.23694C12.395 8.23694 12.7784 8.62029 12.7784 9.09318V15.3722C12.7784 15.8451 12.395 16.2284 11.9222 16.2284C11.4493 16.2284 11.0659 15.8451 11.0659 15.3722V9.09318C11.0659 8.62029 11.4493 8.23694 11.9222 8.23694ZM11.9222 17.652C12.395 17.652 12.7784 18.0354 12.7784 18.5083V19.0791C12.7784 19.552 12.395 19.9353 11.9222 19.9353C11.4493 19.9353 11.0659 19.552 11.0659 19.0791V18.5083C11.0659 18.0354 11.4493 17.652 11.9222 17.652Z\" fill=\"currentColor\"/>\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.8974 18.9385L13.639 3.83981C12.9304 2.54425 11.0696 2.54425 10.361 3.83981L2.10258 18.9385C1.42165 20.1834 2.32258 21.7031 3.74156 21.7031H20.2584C21.6774 21.7031 22.5784 20.1834 21.8974 18.9385ZM15.278 2.94334C13.8607 0.35222 10.1393 0.35222 8.72202 2.94334L0.463591 18.042C-0.898272 20.5319 0.903593 23.5712 3.74156 23.5712H20.2584C23.0964 23.5712 24.8983 20.5319 23.5364 18.042L15.278 2.94334Z\" fill=\"currentColor\"/>\r\n</svg>\r\n";

const $$Astro$L = createAstro();
const $$Alert = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$L, $$props, $$slots);
  Astro2.self = $$Alert;
  const iconMap = {
    info,
    success,
    warning,
    alert
  };
  const {
    element = "section",
    title,
    titleTag = "strong",
    titleProps,
    bodyProps,
    className,
    theme,
    ...rest
  } = Astro2.props;
  const Component = element;
  const Title = titleTag;
  const hasCustomIcon = Astro2.slots.has("icon");
  const classes = [
    styles$1["w-alert"],
    !hasCustomIcon && !theme && styles$1.col,
    theme && styles$1[theme],
    className
  ].filter(Boolean).join(" ");
  const props = {
    class: classes
  };
  return renderTemplate`${renderComponent($$result, "Component", Component, { ...props, ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["icon"])} ${!hasCustomIcon && theme && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(iconMap[theme])}` })}`}${renderComponent($$result2, "ConditionalWrapper", $$ConditionalWrapper, { "condition": !!(hasCustomIcon || theme) }, { "default": ($$result3) => renderTemplate`  ${title && renderTemplate`${renderComponent($$result3, "Title", Title, { "class:list": styles$1.title, ...titleProps }, { "default": ($$result4) => renderTemplate`${title}` })}`}${maybeRenderHead()}<div${addAttribute(styles$1.body, "class")}${spreadAttributes(bodyProps)}> ${renderSlot($$result3, $$slots["default"])} </div> `, "wrapper": ($$result3) => renderTemplate`<div${addAttribute(styles$1.wrapper, "class")}>
children
</div>` })} ` })}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Alert/Alert.astro", void 0);

const $$Astro$K = createAstro();
const $$AspectRatio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$K, $$props, $$slots);
  Astro2.self = $$AspectRatio;
  const {
    ratio,
    className
  } = Astro2.props;
  const classes = [
    styles$2.ratio,
    className
  ];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class:list")}${addAttribute(`aspect-ratio: ${ratio.replace(":", "/")};`, "style")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/AspectRatio/AspectRatio.astro", void 0);

const $$Astro$J = createAstro();
const $$Avatar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$J, $$props, $$slots);
  Astro2.self = $$Avatar;
  const {
    img,
    alt = "Avatar",
    size = 40,
    lazy = true,
    borderColor,
    borderless,
    reverse,
    className,
    groupClassName
  } = Astro2.props;
  const classes = [
    styles$3.avatar,
    borderless && styles$3.borderless,
    className
  ];
  const groupClasses = [
    styles$3.group,
    reverse && styles$3.reverse,
    groupClassName
  ];
  return renderTemplate`${Array.isArray(img) ? renderTemplate`${maybeRenderHead()}<div${addAttribute(groupClasses, "class:list")}${addAttribute(borderColor ? `--w-avatar-border: ${borderColor};` : null, "style")}>${img.map((img2, index) => renderTemplate`<img${addAttribute(img2, "src")}${addAttribute(Array.isArray(alt) ? alt[index] : alt, "alt")}${addAttribute(Array.isArray(size) ? size[index] : size, "width")}${addAttribute(Array.isArray(size) ? size[index] : size, "height")}${addAttribute(lazy ? "lazy" : null, "loading")}${addAttribute(classes, "class:list")}${addAttribute(Array.isArray(size) ? `--w-avatar-index: ${size[index]}` : null, "style")}>`)}</div>` : renderTemplate`<img${addAttribute(img, "src")}${addAttribute(Array.isArray(alt) ? alt[0] : alt, "alt")}${addAttribute(Array.isArray(size) ? size[0] : size, "width")}${addAttribute(Array.isArray(size) ? size[0] : size, "height")}${addAttribute(classes, "class:list")}${addAttribute(lazy ? "lazy" : null, "loading")}${addAttribute(borderColor ? `--w-avatar-border: ${borderColor};` : null, "style")}>`}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Avatar/Avatar.astro", void 0);

const $$Astro$I = createAstro();
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$I, $$props, $$slots);
  Astro2.self = $$Badge;
  const {
    theme,
    hover,
    small,
    rounded,
    className,
    ...rest
  } = Astro2.props;
  const classes = [
    styles$4.badge,
    theme && styles$4[theme],
    hover && styles$4.hover,
    small && styles$4.small,
    rounded && styles$4.round,
    className
  ];
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(classes, "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Badge/Badge.astro", void 0);

const $$Astro$H = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$H, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    theme,
    href,
    className,
    ...rest
  } = Astro2.props;
  const classes = [
    styles$5.button,
    theme && styles$5[theme],
    className
  ];
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${spreadAttributes(rest)}${addAttribute(href, "href")}${addAttribute(classes, "class:list")}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${spreadAttributes(rest)}${addAttribute(classes, "class:list")}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Button/Button.astro", void 0);

const closeIcon = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M23 1L1 23M1 1L23 23\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n</svg>\r\n";

const $$Astro$G = createAstro();
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$G, $$props, $$slots);
  Astro2.self = $$Banner;
  const {
    top,
    bottom,
    closeable,
    padded,
    sticky = true,
    className
  } = Astro2.props;
  const classes = [
    styles$6.banner,
    bottom && styles$6.bottom,
    closeable && styles$6.closeable,
    padded && styles$6.padded,
    !sticky && styles$6.relative,
    className
  ];
  const style = top ? `--w-banner-top: ${top}px;` : null;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class:list")}${addAttribute(style, "style")}> ${renderSlot($$result, $$slots["default"])} ${closeable && renderTemplate`${renderComponent($$result, "Button", $$Button, { "theme": "flat", "className": styles$6.close, "data-id": "w-banner-close" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(closeIcon)}` })} ` })}`} </div> ${renderScript($$result, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Banner/Banner.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Banner/Banner.astro", void 0);

const ArrowLeft = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.5786 0.360618C18.1158 0.864272 18.143 1.70806 17.6394 2.24526L8.4943 12L17.6394 21.7547C18.143 22.292 18.1158 23.1358 17.5786 23.6395C17.0413 24.143 16.1976 24.1158 15.6939 23.5787L5.6938 12.9119C5.213 12.3991 5.213 11.601 5.6938 11.0881L15.6939 0.421418C16.1976 -0.11581 17.0414 -0.143009 17.5786 0.360618Z\" fill=\"currentColor\"/>\r\n</svg>\r\n";

const ArrowRight = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.42142 23.6394C5.88419 23.1357 5.85699 22.2919 6.36062 21.7547L15.5057 12L6.36062 2.2453C5.85699 1.708 5.88419 0.8642 6.42142 0.3605C6.95865 -0.143 7.80243 -0.115799 8.30606 0.421301L18.3062 11.0881C18.787 11.6009 18.787 12.399 18.3062 12.9119L8.30606 23.5786C7.80243 24.1158 6.95865 24.143 6.42142 23.6394Z\" fill=\"currentColor\"/>\r\n</svg>\r\n";

const checkIcon = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M23.086 2.4174C24.073 3.13011 24.2953 4.50795 23.5827 5.49488L13.0118 20.1331C13.012 20.1328 13.0116 20.1333 13.0118 20.1331C12.559 20.7606 11.9697 21.2786 11.2894 21.647C10.6088 22.0155 9.85351 22.2256 9.0803 22.2619C8.30708 22.298 7.53554 22.159 6.82355 21.8555C6.11169 21.552 5.4775 21.0918 4.9682 20.5092C4.96837 20.5094 4.96803 20.5089 4.9682 20.5092L0.544999 15.451C-0.256393 14.5348 -0.163144 13.1422 0.753251 12.3408C1.66965 11.5394 3.06219 11.6327 3.86356 12.549L8.28678 17.6071C8.35962 17.6905 8.4506 17.7566 8.55232 17.8001C8.65405 17.8435 8.76437 17.8633 8.8747 17.8581C8.98526 17.8528 9.09319 17.823 9.19038 17.7702C9.28757 17.7177 9.37163 17.6437 9.43634 17.5541L20.0087 2.91393C20.7212 1.92699 22.0991 1.7047 23.086 2.4174Z\" fill=\"currentColor\"/>\r\n</svg>\r\n";

const CircleClose = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M15.6667 8.33333L8.33333 15.6667M8.33333 8.33333L15.6667 15.6667M23 12C23 13.4445 22.7155 14.8749 22.1627 16.2095C21.6099 17.5441 20.7996 18.7567 19.7782 19.7782C18.7567 20.7996 17.5441 21.6099 16.2095 22.1627C14.8749 22.7155 13.4445 23 12 23C10.5555 23 9.12506 22.7155 7.79048 22.1627C6.4559 21.6099 5.24327 20.7996 4.22183 19.7782C3.20038 18.7567 2.39013 17.5441 1.83733 16.2095C1.28452 14.8749 1 13.4445 1 12C1 9.08262 2.15893 6.28473 4.22183 4.22183C6.28473 2.15893 9.08262 1 12 1C14.9174 1 17.7153 2.15893 19.7782 4.22183C21.8411 6.28473 23 9.08262 23 12Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n</svg>\r\n";

const Components = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M8.15 4.85L12 1L15.85 4.85L12 8.7L8.15 4.85ZM15.3 12.55L19.15 8.7L23 12.55L19.15 16.4L15.3 12.55ZM8.15 19.15L12 15.3L15.85 19.15L12 23L8.15 19.15ZM1 12L4.85 8.15L8.7 12L4.85 15.85L1 12Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n</svg>\r\n";

const Copy = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M22.791 13.0523C23 12.5476 23 11.9059 23 10.625C23 9.34411 23 8.70244 22.791 8.19767C22.6528 7.86392 22.4502 7.56066 22.1948 7.30524C21.9393 7.04981 21.6361 6.8472 21.3023 6.709C20.7976 6.5 20.1559 6.5 18.875 6.5H10.9C9.36 6.5 8.59 6.5 8.00211 6.79944C7.48421 7.06318 7.06318 7.48421 6.79944 8.00211C6.5 8.58878 6.5 9.35878 6.5 10.9V18.875C6.5 20.1559 6.5 20.7976 6.709 21.3023C6.98889 21.9758 7.52422 22.5123 8.19767 22.791C8.70244 23 9.34411 23 10.625 23C11.9059 23 12.5476 23 13.0523 22.791M22.791 13.0523C22.6528 13.3861 22.4502 13.6893 22.1948 13.9448C21.9393 14.2002 21.6361 14.4028 21.3023 14.541C20.7976 14.75 20.1559 14.75 18.875 14.75C17.5941 14.75 16.9524 14.75 16.4477 14.959C16.1139 15.0972 15.8107 15.2998 15.5552 15.5552C15.2998 15.8107 15.0972 16.1139 14.959 16.4477C14.75 16.9524 14.75 17.5941 14.75 18.875C14.75 20.1559 14.75 20.7976 14.541 21.3023C14.4028 21.6361 14.2002 21.9393 13.9448 22.1948C13.6893 22.4502 13.3861 22.6528 13.0523 22.791M22.791 13.0523C22.1337 15.3195 20.9244 17.3883 19.2713 19.0734C17.6182 20.7585 15.573 22.0073 13.3188 22.7079L13.0523 22.791M17.5 6.5V5.4C17.5 3.86 17.5 3.09 17.2006 2.50211C16.9371 1.98439 16.5166 1.56338 15.9991 1.29944C15.41 1 14.64 1 13.1 1H5.4C3.86 1 3.09 1 2.50211 1.29944C1.98421 1.56318 1.56318 1.98421 1.29944 2.50211C1 3.08878 1 3.85878 1 5.4V13.1C1 14.64 1 15.41 1.29944 15.9979C1.56344 16.5161 1.98389 16.9366 2.50211 17.2006C3.08878 17.5 3.86 17.5 5.40122 17.5H6.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n</svg>\r\n";

const File = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M9.30726 1H6.66667C5.95942 1 5.28115 1.28973 4.78105 1.80546C4.28095 2.32118 4 3.02065 4 3.75V20.25C4 20.9793 4.28095 21.6788 4.78105 22.1945C5.28115 22.7103 5.95942 23 6.66667 23H17.3333C18.0406 23 18.7189 22.7103 19.219 22.1945C19.719 21.6788 20 20.9793 20 20.25V12M9.30726 1C10.7804 1 12 2.23078 12 3.75V6.5C12 7.22935 12.281 7.92882 12.781 8.44454C13.2811 8.96027 13.9594 9.25 14.6667 9.25H17.3333C18.0406 9.25 18.7189 9.53973 19.219 10.0555C19.719 10.5712 20 11.2707 20 12M9.30726 1C13.6806 1 20 7.55111 20 12\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n</svg>\r\n";

const Github = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M22.3903 6.12641C21.3172 4.24172 19.8617 2.74961 18.0232 1.64975C16.1845 0.549822 14.1772 0 11.9999 0C9.82282 0 7.81486 0.54999 5.97655 1.64975C4.13797 2.74956 2.68246 4.24172 1.60939 6.12641C0.536482 8.01104 0 10.0691 0 12.3005C0 14.9808 0.762885 17.3911 2.28904 19.5319C3.81503 21.6728 5.78638 23.1543 8.20293 23.9764C8.48422 24.0299 8.69245 23.9923 8.82785 23.8644C8.96329 23.7364 9.03093 23.5761 9.03093 23.3841C9.03093 23.3521 9.02825 23.0639 9.02305 22.5193C9.01812 22.0442 9.01549 21.5691 9.01517 21.094L8.65579 21.1577C8.42665 21.2008 8.13758 21.219 7.78859 21.2138C7.43977 21.2088 7.07764 21.1714 6.70271 21.1017C6.32762 21.0326 5.97874 20.8725 5.6558 20.6215C5.33302 20.3706 5.10388 20.0422 4.96844 19.6367L4.81219 19.2681C4.70805 19.0227 4.54409 18.7502 4.32009 18.4514C4.0961 18.1523 3.86959 17.9496 3.64045 17.8428L3.53105 17.7625C3.45816 17.7092 3.39051 17.6448 3.32796 17.5702C3.26546 17.4955 3.21867 17.4208 3.18742 17.346C3.15612 17.2711 3.18206 17.2096 3.26552 17.1614C3.34898 17.1133 3.4998 17.0899 3.71865 17.0899L4.03103 17.1377C4.23937 17.1805 4.49708 17.3084 4.80448 17.522C5.11171 17.7356 5.36427 18.0131 5.56222 18.3547C5.80192 18.7926 6.09071 19.1262 6.42941 19.3559C6.76784 19.5855 7.10906 19.7001 7.45274 19.7001C7.79642 19.7001 8.09325 19.6734 8.34335 19.6202C8.59318 19.5668 8.82757 19.4866 9.04642 19.3799C9.14017 18.6642 9.39541 18.1143 9.81193 17.73C9.21826 17.6661 8.68452 17.5697 8.21042 17.4417C7.7366 17.3134 7.24697 17.1053 6.74184 16.8167C6.23645 16.5285 5.81719 16.1707 5.48396 15.7438C5.15068 15.3166 4.87715 14.7559 4.66378 14.062C4.45029 13.3678 4.34352 12.5671 4.34352 11.6595C4.34352 10.3673 4.75506 9.26765 5.57798 8.35997C5.19249 7.38846 5.22888 6.29936 5.68727 5.0928C5.98936 4.99659 6.43735 5.06879 7.03102 5.30894C7.6248 5.54921 8.05954 5.75504 8.33569 5.92569C8.61184 6.09629 8.8331 6.24085 8.99979 6.3581C9.96872 6.08058 10.9686 5.94179 11.9998 5.94179C13.0309 5.94179 14.0311 6.08058 15 6.3581L15.5938 5.97388C15.9998 5.71751 16.4792 5.48257 17.031 5.269C17.5831 5.05555 18.0052 4.99675 18.297 5.09296C18.7656 6.29959 18.8074 7.38863 18.4217 8.36014C19.2446 9.26782 19.6563 10.3677 19.6563 11.6597C19.6563 12.5673 19.5492 13.3705 19.336 14.07C19.1226 14.7696 18.8467 15.3298 18.5083 15.7518C18.1695 16.1737 17.7475 16.5288 17.2424 16.8169C16.7372 17.1052 16.2474 17.3134 15.7735 17.4416C15.2995 17.5698 14.7658 17.6662 14.1721 17.7303C14.7136 18.2106 14.9843 18.9688 14.9843 20.0045V23.3837C14.9843 23.5756 15.0495 23.7359 15.1798 23.864C15.31 23.9918 15.5156 24.0295 15.7969 23.9759C18.2138 23.1539 20.1851 21.6724 21.7111 19.5314C23.2368 17.3907 24 14.9804 24 12.3C23.9995 10.0689 23.4627 8.01104 22.3903 6.12641Z\" fill=\"currentColor\"/>\r\n</svg>\r\n";

const Home = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M4.66625 23C3.19375 23 2 21.8022 2 20.3234V9.56554C2 8.75277 2.36875 7.98279 3 7.47557L10.3337 1.587C10.8023 1.2076 11.3916 1 12 1C12.6084 1 13.1977 1.2076 13.6663 1.587L20.9987 7.47557C21.6312 7.98279 22 8.75277 22 9.56554V20.3234C22 21.8022 20.8063 23 19.3338 23H4.66625Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n<path d=\"M9 23V16.4C9 15.7635 9.25286 15.153 9.70294 14.7029C10.153 14.2529 10.7635 14 11.4 14H12.6C13.2365 14 13.847 14.2529 14.2971 14.7029C14.7471 15.153 15 15.7635 15 16.4V23\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n</svg>\r\n";

const Moon = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M23 12.9878C22.3889 19.5232 15.8512 24.1592 9.42483 22.745C-2.76068 20.0671 -1.26102 2.11102 10.9147 1C5.14829 8.69528 15.1998 18.6762 23 12.9878Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n</svg>\r\n";

const orderIcon = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M5.8125 20V4M5.8125 4L10.625 9.09091M5.8125 4L1 9.09091M18.1875 4V20M18.1875 20L23 14.9091M18.1875 20L13.375 14.9091\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n</svg>\r\n";

const searchIcon = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M18.765 18.765L23 23M21.7776 11.4239C21.7776 17.181 17.126 21.8478 11.3895 21.8478C5.65163 21.8478 1 17.181 1 11.4252C1 5.66537 5.65162 1 11.3881 1C17.126 1 21.7776 5.66675 21.7776 11.4239Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n</svg>\r\n";

const Sun = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M1 12H4.66667M3.44444 3.44444L6.03678 6.03678M20.5556 3.44444L17.9632 6.03678M3.44444 20.5556L6.03678 17.9632M20.5556 20.5556L17.9632 17.9632M12 1V4.66667M12 23V19.3333M19.3333 12H23M15.6667 12C15.6667 12.9725 15.2804 13.9051 14.5927 14.5927C13.9051 15.2804 12.9725 15.6667 12 15.6667C11.0275 15.6667 10.0949 15.2804 9.40727 14.5927C8.71964 13.9051 8.33333 12.9725 8.33333 12C8.33333 11.0275 8.71964 10.0949 9.40727 9.40727C10.0949 8.71964 11.0275 8.33333 12 8.33333C12.9725 8.33333 13.9051 8.71964 14.5927 9.40727C15.2804 10.0949 15.6667 11.0275 15.6667 12Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n</svg>\r\n";

const iconMap = {
  "alert": alert,
  "arrow-down": ArrowDown,
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "check": checkIcon,
  "circle-check": success,
  "circle-close": CircleClose,
  "close": closeIcon,
  "components": Components,
  "copy": Copy,
  "file": File,
  "github": Github,
  "home": Home,
  "info": info,
  "moon": Moon,
  "order": orderIcon,
  "plus": Plus,
  "search": searchIcon,
  "sun": Sun,
  "warning": warning
};

const $$Astro$F = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    type,
    size = 24,
    color
  } = Astro2.props;
  const icon = iconMap[type].replace('width="24"', `width=${size}`).replace('height="24"', color ? `height=${size} color=${color}` : `height=${size}`);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(icon)}` })}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Icon/Icon.astro", void 0);

const $$Astro$E = createAstro();
const $$BottomNavigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$BottomNavigation;
  const {
    items,
    separated,
    floating,
    maxWidth,
    className
  } = Astro2.props;
  const classes = [
    styles$7.nav,
    separated && styles$7.separated,
    maxWidth && styles$7.bordered,
    floating && styles$7.floating,
    className
  ];
  const styleVariable = maxWidth ? `--w-bottom-navigation-max-width: ${maxWidth};` : null;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(classes, "class:list")}${addAttribute(styleVariable, "style")}> <ul> ${items?.map((item) => ({ ...item, element: item.href ? "a" : "div" })).map((item) => renderTemplate`<li${addAttribute(item.tooltip, "data-tooltip")}${addAttribute([item.icon && styles$7["with-icon"]], "class:list")}> ${renderComponent($$result, "item.element", item.element, { ...{ href: item.href, target: item.target, class: styles$7.item } }, { "default": ($$result2) => renderTemplate`${item.icon && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${item.icon?.startsWith("<svg") ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(item.icon)}` })}` : renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "type": item.icon })}`}` })}`}${item.name}` })} </li>`)} </ul> </nav>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/BottomNavigation/BottomNavigation.astro", void 0);

const $$Astro$D = createAstro();
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const {
    items,
    separator,
    className
  } = Astro2.props;
  const classes = [
    styles$8.breadcrumb,
    className
  ];
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(classes, "class:list")}> ${items?.map((item, index) => renderTemplate`<li> ${renderComponent($$result, "ConditionalWrapper", $$ConditionalWrapper, { "condition": !!(item.href && index !== items.length - 1) }, { "default": ($$result2) => renderTemplate`  ${item.icon && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${item.icon.startsWith("<svg") ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(item.icon)}` })}` : renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "type": item.icon })}`}` })}`}${item.label}`, "wrapper": ($$result2) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(item.target, "target")}>
children
</a>` })} </li>
        ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${index < items.length - 1 && renderTemplate`<li> ${separator || renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "type": "arrow-right" })}`} </li>`}` })}`)} </ul>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Breadcrumb/Breadcrumb.astro", void 0);

const $$Astro$C = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    element = "section",
    title,
    titleTag = "span",
    compact,
    className,
    bodyClassName,
    secondary,
    ...rest
  } = Astro2.props;
  const classes = [
    styles$9.card,
    secondary && styles$9.secondary,
    className
  ];
  const bodyClasses = [
    styles$9.body,
    compact && styles$9.compact,
    bodyClassName
  ];
  const Component = element;
  const Title = titleTag;
  return renderTemplate`${renderComponent($$result, "Component", Component, { "class:list": classes, ...rest }, { "default": ($$result2) => renderTemplate`${title && renderTemplate`${renderComponent($$result2, "Title", Title, { "class:list": styles$9.title }, { "default": ($$result3) => renderTemplate`${title}` })}`}${maybeRenderHead()}<div${addAttribute(bodyClasses, "class:list")}> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Card/Card.astro", void 0);

const $$Astro$B = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$Pagination;
  const {
    type,
    showChevrons,
    showDots,
    disablePrevious,
    disableNext,
    previousLink,
    nextLink,
    previousPageLabel = "Previous",
    nextPageLabel = "Next",
    pages,
    theme = "outline",
    totalPages,
    currentPage,
    className
  } = Astro2.props;
  const classes = [
    styles$a.pagination,
    theme !== "outline" && (theme === null ? styles$a.primary : styles$a[theme]),
    type === "dots" && styles$a.dots,
    className
  ];
  const calculatedCurrentPage = currentPage || (pages?.findIndex((page) => page.active) || -1) + 1 || 1;
  const calculatedTotalPages = totalPages || pages?.length || 0;
  const generatedPages = pages?.length ? pages : Array(totalPages || 0).fill(0).map((_, index) => ({
    ...index === 0 && { active: true },
    label: index + 1
  }));
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(classes, "class:list")} data-id="w-pagination"${addAttribute(calculatedTotalPages, "data-total-pages")}${addAttribute(calculatedCurrentPage, "data-current-page")}> ${type === "dots" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${generatedPages?.map((page) => renderTemplate`<li> <button${addAttribute(page.active ? "true" : void 0, "data-active")}${addAttribute(page.label, "data-page")}></button> </li>`)}` })}` : renderTemplate`<li> ${renderComponent($$result, "Button", $$Button, { "disabled": disablePrevious || calculatedCurrentPage === 1 && !previousLink, "href": !disablePrevious ? previousLink : void 0, "theme": theme, "data-page": "prev" }, { "default": ($$result2) => renderTemplate`${(showChevrons || type === "arrows") && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(ArrowLeft)}` })}`}${type !== "arrows" && previousPageLabel}` })} </li>
        ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${type !== "arrows" && pages?.slice(0, calculatedTotalPages)?.map(
    (page, index) => renderTemplate`<li> ${renderComponent($$result2, "Button", $$Button, { "href": page.link, "data-active": calculatedCurrentPage === index + 1 ? "true" : null, "theme": theme, "data-page": page.label }, { "default": ($$result3) => renderTemplate`${page.label}` })} </li>`
  )}${showDots && renderTemplate`<li> ${renderComponent($$result2, "Button", $$Button, { "theme": theme, "className": styles$a.inactive }, { "default": ($$result3) => renderTemplate`
...
` })} </li>`}` })}
        <li> ${renderComponent($$result, "Button", $$Button, { "disabled": disableNext || calculatedCurrentPage === calculatedTotalPages && !nextLink, "href": !disableNext ? nextLink : void 0, "theme": theme, "data-page": "next" }, { "default": ($$result2) => renderTemplate`${type !== "arrows" && nextPageLabel}${(showChevrons || type === "arrows") && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(ArrowRight)}` })}`}` })} </li>`} </ul> ${renderScript($$result, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Pagination/Pagination.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Pagination/Pagination.astro", void 0);

const classNames = (classes) => classes.flat(Infinity).filter(Boolean).join(" ");

const $$Astro$A = createAstro();
const $$Progress = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$Progress;
  const {
    value,
    size,
    label,
    color,
    background,
    square,
    striped,
    stripeLight,
    stripeDark,
    className
  } = Astro2.props;
  const classes = [
    styles$b["w-progress"],
    size && styles$b[size],
    striped && styles$b.striped,
    square && styles$b.square,
    className
  ];
  const styleVariables = classNames([
    color && `--w-progress-color: ${color};`,
    background && `--w-progress-background: ${background};`,
    stripeLight && `--w-progress-stripe-light: ${stripeLight};`,
    stripeDark && `--w-progress-stripe-dark: ${stripeDark};`
  ]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class:list")}${addAttribute(styleVariables, "style")}> <div${addAttribute(styles$b.progress, "class")}${addAttribute(`--w-progress-width: ${value}%;`, "style")}> ${label && `${value}%`} </div> </div>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Progress/Progress.astro", void 0);

const $$Astro$z = createAstro();
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$Carousel;
  const {
    items,
    itemsPerSlide = 1,
    subText,
    scrollSnap = true,
    progress,
    pagination,
    effect,
    debounce = 20,
    className,
    wrapperClassName,
    paginationClassName
  } = Astro2.props;
  const classes = [
    styles$c.carousel,
    className
  ];
  const containerClasses = [
    styles$c.container,
    scrollSnap && styles$c.snap
  ];
  const wrapperClasses = [
    styles$c.wrapper,
    effect && styles$c[effect],
    itemsPerSlide > 1 && styles$c["no-snap"],
    wrapperClassName
  ];
  const paginationWrapperClasses = [
    styles$c["pagination-wrapper"],
    paginationClassName
  ];
  const paginationClasses = classNames([
    styles$c.pagination,
    !subText && paginationClassName
  ]);
  const totalPages = Math.ceil(items / itemsPerSlide);
  const subTextValue = subText?.match(/\{0\}|\{1\}/g) ? subText : void 0;
  const style = itemsPerSlide > 1 ? `--w-slide-width: calc(${100 / itemsPerSlide}% - 5px);` : null;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(classes, "class:list")}> <div${addAttribute(containerClasses, "class:list")} data-id="w-carousel"${addAttribute(debounce !== 20 && debounce, "data-debounce")}> <ul${addAttribute(wrapperClasses, "class:list")}${addAttribute(style, "style")}${addAttribute(itemsPerSlide > 1 ? itemsPerSlide : null, "data-visible-items")}> ${renderSlot($$result, $$slots["default"])} </ul> </div> ${renderComponent($$result, "ConditionalWrapper", $$ConditionalWrapper, { "condition": !!(subText || progress) }, { "default": ($$result2) => renderTemplate`  ${progress && renderTemplate`${renderComponent($$result2, "Progress", $$Progress, { "className": "w-carousel-progress", "value": 0 })}`}${renderComponent($$result2, "Pagination", $$Pagination, { "type": "arrows", ...pagination, "totalPages": totalPages, "className": paginationClasses })} ${subText && renderTemplate`<span${addAttribute(styles$c.subtext, "class")}${addAttribute(subTextValue, "data-text")}> ${subText.replace("{0}", "1").replace("{1}", String(totalPages))} </span>`}`, "wrapper": ($$result2) => renderTemplate`<div${addAttribute(paginationWrapperClasses, "class:list")}>children</div>` })} </section> ${renderScript($$result, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Carousel/Carousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Carousel/Carousel.astro", void 0);

const $$Astro$y = createAstro();
const $$Checkbox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$Checkbox;
  const {
    checked,
    label,
    subText,
    disabled,
    color,
    className,
    ...rest
  } = Astro2.props;
  const classes = [
    styles$d.checkbox,
    label && subText && styles$d.col,
    className
  ];
  const style = color ? `--w-checkbox-color: ${color};` : null;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(classes, "class:list")}${addAttribute(style, "style")}> ${renderComponent($$result, "ConditionalWrapper", $$ConditionalWrapper, { "condition": !!(label && subText) }, { "default": ($$result2) => renderTemplate`  <input type="checkbox"${addAttribute(checked, "checked")}${addAttribute(disabled, "disabled")}${spreadAttributes(rest)}> <span${addAttribute(styles$d.check, "class")}> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(checkIcon)}` })} </span> ${label && renderTemplate`<span${addAttribute(styles$d.label, "class")}> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(label)}` })} </span>`}`, "wrapper": ($$result2) => renderTemplate`<div${addAttribute(styles$d.wrapper, "class")}>
children
</div>` })} ${label && subText && renderTemplate`<span${addAttribute(styles$d.text, "class")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(subText)}` })} </span>`} </label>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Checkbox/Checkbox.astro", void 0);

const $$Astro$x = createAstro();
const $$Collapsible = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$Collapsible;
  const {
    initialHeight,
    maxHeight,
    toggled,
    className,
    togglesClassName
  } = Astro2.props;
  const classes = [
    styles$e.collapsible,
    maxHeight && styles$e.animated,
    className
  ];
  const styleVariables = classNames([
    initialHeight && `--w-collapsible-initial-height: ${initialHeight};`,
    maxHeight && `--w-collapsible-max-height: ${maxHeight};`
  ]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class:list")}${addAttribute(toggled ? "true" : void 0, "data-toggled")} data-id="w-collapsible"> <div${addAttribute(styles$e.wrapper, "class")}${addAttribute(styleVariables, "style")}> ${renderSlot($$result, $$slots["default"])} </div> <div${addAttribute(togglesClassName, "class:list")}> <div data-toggle-on="true">${renderSlot($$result, $$slots["on"])}</div> <div data-toggle-off="true">${renderSlot($$result, $$slots["off"])}</div> </div> </div> ${renderScript($$result, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Collapsible/Collapsible.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Collapsible/Collapsible.astro", void 0);

const $$Astro$w = createAstro();
const $$Copy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Copy;
  const {
    tooltip,
    tooltipPosition,
    copyIcon = "copy",
    copiedIcon = "circle-check",
    className,
    ...rest
  } = Astro2.props;
  const classes = classNames([
    styles$f.copy,
    className
  ]);
  return renderTemplate`${renderComponent($$result, "Badge", $$Badge, { ...rest, "className": classes, "data-tooltip": tooltip, "data-position": tooltipPosition }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ${maybeRenderHead()}<div${addAttribute(styles$f.icons, "class")}> <button${addAttribute(styles$f["copy-icon"], "class")} data-id="w-copy"> ${copyIcon?.startsWith("<svg") ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(copyIcon)}` })}` : renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "type": copyIcon })}`} </button> <span${addAttribute(styles$f.copied, "class")}> ${copiedIcon?.startsWith("<svg") ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(copiedIcon)}` })}` : renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "type": copiedIcon })}`} </span> </div> ` })} ${renderScript($$result, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Copy/Copy.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Copy/Copy.astro", void 0);

const $$Astro$v = createAstro();
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Input;
  const {
    type = "text",
    theme,
    label,
    subText,
    className,
    labelClassName,
    ...rest
  } = Astro2.props;
  const classes = [
    styles$g.input,
    theme && styles$g[theme],
    className
  ];
  const labelClasses = [
    styles$g["input-label"],
    labelClassName
  ];
  const useLabel = !!(label || subText || Astro2.slots.has("default"));
  return renderTemplate`${renderComponent($$result, "ConditionalWrapper", $$ConditionalWrapper, { "condition": useLabel }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<input${addAttribute(type, "type")}${addAttribute(classes, "class:list")}${spreadAttributes(rest)}> `, "wrapper": ($$result2) => renderTemplate`<label${addAttribute(labelClasses, "class:list")}> ${label && renderTemplate`<div${addAttribute(styles$g.label, "class")}>${unescapeHTML(label)}</div>`} ${renderComponent($$result2, "ConditionalWrapper", $$ConditionalWrapper, { "condition": Astro2.slots.has("default") }, { "default": ($$result3) => renderTemplate`  ${renderSlot($$result3, $$slots["default"])}
children
`, "wrapper": ($$result3) => renderTemplate`<div${addAttribute(styles$g.wrapper, "class")}>
children
</div>` })} ${subText && renderTemplate`<div${addAttribute(styles$g.subtext, "class")}> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(subText)}` })} </div>`} </label>` })}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Input/Input.astro", void 0);

const $$Astro$u = createAstro();
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$List;
  const {
    showSearchBar,
    showSearchBarIcon,
    searchBarPlaceholder,
    noResultsLabel = "No results.",
    maxHeight,
    id,
    className,
    wrapperClassName,
    itemGroups
  } = Astro2.props;
  const classes = [
    styles$h.list,
    !showSearchBar && styles$h.container,
    className
  ];
  const wrapperClasses = [
    styles$h.container,
    wrapperClassName
  ];
  return renderTemplate`${renderComponent($$result, "ConditionalWrapper", $$ConditionalWrapper, { "condition": !!showSearchBar }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<ul${addAttribute(classes, "class:list")}${addAttribute(id, "id")} data-id="w-list"${addAttribute(maxHeight && `max-height: ${maxHeight}`, "style")}> ${itemGroups.map((group) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${group.title && renderTemplate`<li${addAttribute(styles$h.title, "class")} data-id="w-list-title"> ${group.title} </li>`}${group.items.map((item) => renderTemplate`<li${addAttribute(item.href || item.disabled ? void 0 : 0, "tabindex")}${addAttribute(item.value, "data-value")}${addAttribute(item.name, "data-name")}${addAttribute(item.disabled ? "true" : void 0, "data-disabled")}${addAttribute(item.selected, "data-selected")}> ${renderComponent($$result3, "ConditionalWrapper", $$ConditionalWrapper, { "condition": !!item.href }, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "ConditionalWrapper", $$ConditionalWrapper, { "condition": !!(item.icon && item.subText) }, { "default": ($$result5) => renderTemplate`  ${item.icon && renderTemplate`${renderComponent($$result5, "Fragment", Fragment, {}, { "default": ($$result6) => renderTemplate`${unescapeHTML(item.icon)}` })}`}<div>${item.name}</div> `, "wrapper": ($$result5) => renderTemplate`<div>children</div>` })} ${item.subText && renderTemplate`<span>${item.subText}</span>`}`, "wrapper": ($$result4) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(item.target, "target")}>
children
</a>` })} </li>`)}` })}`)} ${showSearchBar && renderTemplate`<li data-id="w-no-results" data-hidden>${noResultsLabel}</li>`} </ul> `, "wrapper": ($$result2) => renderTemplate`<div${addAttribute(wrapperClasses, "class:list")} data-id="w-list-wrapper"> ${renderComponent($$result2, "Input", $$Input, { "type": "search", "placeholder": searchBarPlaceholder, "data-id": "w-list-search" }, { [showSearchBarIcon ? "default" : null]: ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": showSearchBarIcon ? "default" : null }, { "default": ($$result4) => renderTemplate`${unescapeHTML(searchIcon)}` })}` })}
children
</div>` })} ${renderScript($$result, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/List/List.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/List/List.astro", void 0);

const $$Astro$t = createAstro();
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Modal;
  const iconMap = {
    info,
    success,
    warning,
    alert
  };
  const {
    title,
    subTitle,
    showCloseIcon = true,
    closeOnEsc = true,
    closeOnOverlay = true,
    transparent,
    theme,
    id,
    className,
    ...rest
  } = Astro2.props;
  const close = [
    showCloseIcon && "icon",
    closeOnEsc && "esc",
    closeOnOverlay && "overlay"
  ].filter(Boolean).join(",");
  const classes = [
    styles$i.modal,
    transparent && styles$i.transparent,
    theme && styles$i[theme],
    className
  ];
  return renderTemplate`${maybeRenderHead()}<dialog${addAttribute(classes, "class:list")}${addAttribute(id, "id")}${addAttribute(close.length ? close : void 0, "data-close")}${spreadAttributes(rest)}> ${showCloseIcon && renderTemplate`${renderComponent($$result, "Button", $$Button, { "theme": "flat", "className": styles$i.close, "data-id": "close" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(closeIcon)}` })} ` })}`} ${title && renderTemplate`<strong${addAttribute(styles$i.title, "class")}> ${theme && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(iconMap[theme])}` })}`} ${title} </strong>`} ${subTitle && renderTemplate`<div${addAttribute(styles$i.subTitle, "class")}>${subTitle}</div>`} ${renderSlot($$result, $$slots["default"])} </dialog> <div${addAttribute(styles$i.overlay, "class")}></div>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Modal/Modal.astro", void 0);

const $$Astro$s = createAstro();
const $$Popover = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Popover;
  const {
    id,
    className,
    ...rest
  } = Astro2.props;
  const classes = [
    styles$j.popover,
    className
  ];
  return renderTemplate`${maybeRenderHead()}<dialog${addAttribute(classes, "class:list")}${addAttribute(id, "id")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </dialog>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Popover/Popover.astro", void 0);

const $$Astro$r = createAstro();
const $$Select = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Select;
  const {
    name,
    value,
    placeholder,
    label,
    subText,
    disabled,
    position,
    updateValue = true,
    className,
    ...rest
  } = Astro2.props;
  const classes = classNames([
    styles$k.select,
    disabled && styles$k.disabled,
    className
  ]);
  const inferredValue = rest.itemGroups.map((group) => group.items).flat().find((item) => item.value === value)?.name;
  const inputRestProps = Object.fromEntries(
    Object.entries(rest).filter(([key]) => key.includes("data"))
  );
  return renderTemplate`${renderComponent($$result, "Input", $$Input, { "type": "text", "value": value && inferredValue ? inferredValue : value, "readonly": true, "disabled": disabled, "placeholder": placeholder, "label": label, "subText": subText, "data-id": `w-select-${name}`, "data-no-update": !updateValue ? "true" : void 0, "data-position": position, "labelClassName": classes, ...inputRestProps }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(ArrowDown)}` })} ` })} ${position === "modal" ? renderTemplate`${renderComponent($$result, "Modal", $$Modal, { "className": styles$k.popover, "data-id": `w-options-${name}`, "showCloseIcon": false }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "List", $$List, { ...rest })} ` })}` : renderTemplate`${renderComponent($$result, "Popover", $$Popover, { "className": styles$k.popover, "data-id": `w-options-${name}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "List", $$List, { ...rest })} ` })}`} ${renderScript($$result, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Select/Select.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Select/Select.astro", void 0);

const $$Astro$q = createAstro();
const $$DataTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$DataTable;
  const {
    headings,
    filterPlaceholder = "Filter entries",
    showFilterIcon,
    noResultsLabel = "No results.",
    itemsPerPage,
    subText,
    columnToggleLabel = "Columns",
    pagination,
    data,
    hover,
    striped,
    offsetStripe,
    compact,
    maxHeight,
    className,
    id
  } = Astro2.props;
  const classes = [
    styles$l.table,
    hover && styles$l.hover,
    striped && styles$l[`striped-${striped}s`],
    offsetStripe && styles$l.offset,
    compact && styles$l.compact,
    maxHeight && styles$l.scroll
  ];
  const footerClasses = [
    styles$l.footer,
    subText && styles$l.between
  ];
  const getColumnName = (heading) => {
    if (!heading) {
      return void 0;
    }
    return (heading.name || heading).toLowerCase().replace(/\s/g, "");
  };
  const showColumnToggle = headings?.some((heading) => {
    return typeof heading === "string" ? false : heading.toggleable;
  });
  const columnToggleItems = [{
    items: headings?.length ? headings.filter((heading) => typeof heading !== "string" && heading.toggleable).map((heading) => ({
      name: heading.name,
      value: heading.name.toLowerCase(),
      icon: checkIcon
    })) : []
  }];
  const columnFilterItems = headings?.filter((heading) => typeof heading !== "string").filter((heading) => heading.filterable).map((heading) => heading.name).map((heading) => getColumnName(heading));
  const hasPagination = data?.length && itemsPerPage ? data.length > itemsPerPage : false;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(className, "class")}${addAttribute(id, "id")}> ${(!!columnFilterItems?.length || showColumnToggle) && renderTemplate`<div${addAttribute(styles$l.filters, "class")}> ${!!columnFilterItems?.length && renderTemplate`${renderComponent($$result, "Input", $$Input, { "type": "search", "placeholder": filterPlaceholder, "data-id": "w-data-table-filter", "data-filter": columnFilterItems }, { [showFilterIcon ? "default" : null]: ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": showFilterIcon ? "default" : null }, { "default": ($$result3) => renderTemplate`${unescapeHTML(searchIcon)}` })}` })}`} ${showColumnToggle && renderTemplate`${renderComponent($$result, "Select", $$Select, { "name": `data-table-${id || crypto.randomUUID()}`, "itemGroups": columnToggleItems, "position": "bottom-end", "value": columnToggleLabel, "updateValue": false })}`} </div>`} <div${addAttribute(classes, "class:list")}${addAttribute(maxHeight ? `max-height:${maxHeight}` : void 0, "style")}> <table${addAttribute(itemsPerPage, "data-items-per-page")}${addAttribute(hasPagination && 1, "data-page")}> ${headings?.length && renderTemplate`<thead> <tr> ${headings.map((heading) => renderTemplate`<th${addAttribute(getColumnName(heading), "data-name")}> ${renderComponent($$result, "ConditionalWrapper", $$ConditionalWrapper, { "condition": !!heading.sortable }, { "default": ($$result2) => renderTemplate`  ${heading.name || heading}`, "wrapper": ($$result2) => renderTemplate`${renderComponent($$result2, "Button", $$Button, { "theme": "flat", "slot": "wrapper", "data-id": "w-data-table-sort" }, { "default": ($$result3) => renderTemplate`
children
${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(orderIcon)}` })} ` })}` })} </th>`)} </tr> </thead>`} <tbody> ${data?.map((row, index) => renderTemplate`<tr${addAttribute(hasPagination ? Math.ceil((index + 1) / itemsPerPage) : void 0, "data-page")}${addAttribute(hasPagination && index >= itemsPerPage ? true : void 0, "data-hidden")}> ${row.map((column, index2) => renderTemplate`<td${addAttribute(getColumnName(headings?.[index2]), "data-name")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(column)}` })} </td>`)} </tr>`)} ${renderSlot($$result, $$slots["default"])} </tbody> ${!!columnFilterItems?.length && renderTemplate`<tfoot data-hidden="true"> <tr> <td${addAttribute(data?.[0].length, "colspan")}${addAttribute(styles$l["no-results"], "class")}>${noResultsLabel}</td> </tr> </tfoot>`} </table> </div> ${(subText || hasPagination) && renderTemplate`<div${addAttribute(footerClasses, "class:list")}> ${subText && renderTemplate`<span${addAttribute(styles$l.subtext, "class")}>${subText}</span>`} ${hasPagination && renderTemplate`${renderComponent($$result, "Pagination", $$Pagination, { ...pagination, "totalPages": Math.ceil((data?.length || 0) / itemsPerPage), "className": "w-data-table-pagination" })}`} </div>`} </section> ${renderScript($$result, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/DataTable/DataTable.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/DataTable/DataTable.astro", void 0);

const getLayoutClasses = ({
  gap,
  alignment,
  direction,
  wrap,
  column
}) => {
  const gaps = typeof gap === "string" ? gap : Object.entries(gap || {}).map(([key, value]) => key === "default" ? value : `${key}-${value}`);
  const directions = typeof direction === "string" ? direction : Object.entries(direction || {}).map(([key, value]) => key === "default" ? value : `${key}-${value}`);
  const wraps = typeof wrap === "string" ? wrap : Object.entries(wrap || {}).map(([key, value]) => key === "default" ? value : `${key}-${value}`);
  const columns = typeof column === "number" ? `col-${column}` : Object.entries(column || {}).map(([key, value]) => key === "default" ? `col-${value}` : `${key}-${value}`);
  const flattenAlignments = (obj, prefix = "") => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      const newKey = (prefix ? `${prefix}-${key}` : key).replace("horizontal", "justify").replace("vertical", "items");
      if (typeof value === "object") {
        return { ...acc, ...flattenAlignments(value, newKey) };
      }
      return { ...acc, [newKey.replace("default-", "")]: value };
    }, {});
  };
  const alignments = [...new Set(
    Object.entries(flattenAlignments(alignment || {})).map(([key, value]) => `${key}-${value}`).map((item, _, array) => {
      const hasDuplicate = array.filter((entry) => {
        return entry.includes("justify-center") || entry.includes("items-center");
      }).length > 1;
      return hasDuplicate ? item.replace("justify-center", "center").replace("items-center", "center") : item;
    })
  )];
  return classNames([
    gaps,
    alignments,
    directions,
    wraps,
    columns
  ]);
};

const $$Astro$p = createAstro();
const $$Flex = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Flex;
  const {
    element = "div",
    gap,
    alignment,
    direction,
    wrap,
    className,
    ...rest
  } = Astro2.props;
  const Component = element;
  const classes = classNames([
    "flex",
    getLayoutClasses({ gap, alignment, direction, wrap }),
    className
  ]);
  const props = {
    class: classes
  };
  return renderTemplate`${renderComponent($$result, "Component", Component, { ...props, ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Flex/Flex.astro", void 0);

const $$Astro$o = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Footer;
  const {
    logo,
    columns,
    subText,
    className,
    wrapperClassName,
    subTextClassName
  } = Astro2.props;
  const classes = [
    styles$m.footer,
    className
  ];
  const containerClasses = [
    styles$m.container,
    wrapperClassName
  ];
  const subTextClasses = [
    styles$m.subtext,
    subTextClassName
  ];
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(classes, "class:list")}> <div${addAttribute(containerClasses, "class:list")}> ${renderComponent($$result, "ConditionalWrapper", $$ConditionalWrapper, { "condition": !!(logo?.url || logo?.html) }, { "default": ($$result2) => renderTemplate`  ${logo?.url && renderTemplate`<a href="/"> <img${addAttribute(logo.url, "src")}${addAttribute(logo.alt || "Logo", "alt")}${addAttribute(logo.width, "width")}${addAttribute(logo.height, "height")}${addAttribute(logo.eager ? void 0 : "lazy", "loading")}> </a>`}${logo?.html && renderTemplate`<a href="/"${addAttribute(logo.alt || "Logo", "aria-label")}> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(logo.html)}` })} </a>`}${!!columns?.length && renderTemplate`${renderComponent($$result2, "ConditionalWrapper", $$ConditionalWrapper, { "condition": columns.length > 1 }, { "default": ($$result3) => renderTemplate`  ${columns.map((column) => renderTemplate`${renderComponent($$result3, "ConditionalWrapper", $$ConditionalWrapper, { "condition": !!column.title }, { "default": ($$result4) => renderTemplate`  ${column.title && renderTemplate`<strong${addAttribute(styles$m["column-title"], "class")}>${column.title}</strong>`}<ul${addAttribute(styles$m.column, "class")}> ${column.items.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(item.target, "target")}${addAttribute([item.active && styles$m.active], "class:list")}> ${item.name} </a> </li>`)} </ul> `, "wrapper": ($$result4) => renderTemplate`<div>children</div>` })}`)}`, "wrapper": ($$result3) => renderTemplate`<div${addAttribute(styles$m.columns, "class")}>children</div>` })}`}`, "wrapper": ($$result2) => renderTemplate`<div${addAttribute(styles$m.wrapper, "class")}>children</div>` })} ${(subText || Astro2.slots.has("default")) && renderTemplate`<div${addAttribute(subTextClasses, "class:list")}> ${subText && renderTemplate`<span>${unescapeHTML(subText)}</span>`} ${renderSlot($$result, $$slots["default"])} </div>`} </div> </footer>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Footer/Footer.astro", void 0);

const $$Astro$n = createAstro();
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Grid;
  const {
    element = "div",
    gap,
    column,
    className,
    ...rest
  } = Astro2.props;
  const Component = element;
  const classes = classNames([
    "grid",
    getLayoutClasses({ gap, column }),
    className
  ]);
  const props = {
    class: classes
  };
  return renderTemplate`${renderComponent($$result, "Component", Component, { ...props, ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Grid/Grid.astro", void 0);

const $$Astro$m = createAstro();
const $$Group = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Group;
  const {
    withSeparator,
    className
  } = Astro2.props;
  const classes = [
    styles$n.group,
    withSeparator && styles$n.separator,
    className
  ];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Group/Group.astro", void 0);

const keyMap = {
  cmd: "⌘",
  shift: "⇧",
  ctrl: "⌃",
  option: "⌥",
  enter: "↵",
  del: "⌫",
  esc: "⎋",
  tab: "⇥",
  capslock: "⇪",
  up: "↑",
  down: "↓",
  left: "←",
  right: "→",
  pageup: "⇞",
  pagedown: "⇟",
  home: "↖",
  end: "↘",
  help: "?",
  space: "␣"
};

const $$Astro$l = createAstro();
const $$Kbd = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Kbd;
  const {
    keys,
    className
  } = Astro2.props;
  const classes = [
    styles$o.kbd,
    className
  ];
  return renderTemplate`${maybeRenderHead()}<kbd${addAttribute(classes, "class:list")}>${keys?.map((key) => keyMap[key])}${renderSlot($$result, $$slots["default"])}</kbd>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Kbd/Kbd.astro", void 0);

const $$Astro$k = createAstro();
const $$Masonry = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Masonry;
  const {
    items,
    element = "section",
    gap,
    columns = 3,
    sequential,
    className
  } = Astro2.props;
  const classes = [
    styles$p.masonry,
    className
  ];
  const Component = element;
  const componentProps = {
    "class:list": classes,
    "style": gap ? `--w-masonry-gap: ${gap};` : null
  };
  const chunkSize = Math.ceil(items.length / columns);
  const columnGroups = Array.from({ length: columns }, (_, i) => {
    return sequential ? items.slice(i * chunkSize, (i + 1) * chunkSize) : items.filter((_2, index) => index % columns === i);
  });
  return renderTemplate`${renderComponent($$result, "Component", Component, { ...componentProps }, { "default": ($$result2) => renderTemplate`${columnGroups.map((column) => renderTemplate`${maybeRenderHead()}<div${addAttribute(styles$p.column, "class")}> ${column.map((item) => item.component ? renderTemplate`${renderComponent($$result2, "item.component", item.component, { ...item.props }, { "default": ($$result3) => renderTemplate`${typeof item.children === "object" ? renderTemplate`${renderComponent($$result3, "item.children.component", item.children.component, { ...item.children.props }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Fragment", Fragment, {}, { "default": ($$result5) => renderTemplate`${unescapeHTML(item.children.children)}` })} ` })}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(item.children)}` })}`}` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(item.html)}` })}`)} </div>`)}` })}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Masonry/Masonry.astro", void 0);

const $$Astro$j = createAstro();
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Menu;
  const {
    items,
    logo,
    centerLogo,
    className,
    wrapperClassName
  } = Astro2.props;
  const classes = [
    styles$q.menu,
    className
  ];
  const containerClasses = [
    styles$q.container,
    wrapperClassName
  ];
  const wrapMenu = (logo?.url || logo?.html) && items?.length && Astro2.slots.has("default");
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(classes, "class:list")}> <div${addAttribute(containerClasses, "class:list")}> ${renderComponent($$result, "ConditionalWrapper", $$ConditionalWrapper, { "condition": !!wrapMenu }, { "default": ($$result2) => renderTemplate`  ${logo?.url && !centerLogo && renderTemplate`<a href="/"> <img${addAttribute(logo.url, "src")}${addAttribute(logo.alt || "Logo", "alt")}${addAttribute(logo.width, "width")}${addAttribute(logo.height, "height")}> </a>`}${!centerLogo && logo?.html && renderTemplate`<a href="/"${addAttribute(logo.alt || "Logo", "aria-label")}> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(logo.html)}` })} </a>`}${items?.length && renderTemplate`<ul> ${items.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(item.target, "target")}${addAttribute([item.active && styles$q.active], "class:list")}> ${item.name} </a> </li>`)} </ul>`}`, "wrapper": ($$result2) => renderTemplate`<div${addAttribute(styles$q.wrapper, "class")}>
children
</div>` })} ${items?.length && renderTemplate`<button${addAttribute(styles$q.hamburger, "class")} data-id="hamburger"> <span${addAttribute(styles$q.meat, "class")}></span> <span${addAttribute(styles$q.meat, "class")}></span> <span${addAttribute(styles$q.meat, "class")}></span> <span${addAttribute(styles$q.meat, "class")}></span> </button>`} ${centerLogo && logo?.html && renderTemplate`<a href="/"${addAttribute(logo.alt || "Logo", "aria-label")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(logo.html)}` })} </a>`} ${logo?.url && centerLogo && renderTemplate`<a href="/"> <img${addAttribute(logo.url, "src")}${addAttribute(logo.alt || "Logo", "alt")}${addAttribute(logo.width, "width")}${addAttribute(logo.height, "height")}> </a>`} ${renderSlot($$result, $$slots["default"])} </div> </header> ${renderScript($$result, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Menu/Menu.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Menu/Menu.astro", void 0);

const $$Astro$i = createAstro();
const $$Radio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Radio;
  const {
    name,
    items,
    color,
    inline,
    className,
    ...rest
  } = Astro2.props;
  const classes = [
    styles$r.radio,
    inline && styles$r.inline,
    className
  ];
  const style = color ? `--w-radio-color: ${color};` : null;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class:list")}${addAttribute(style, "style")}> ${items.map((item) => renderTemplate`<label${addAttribute([
    item.subText && styles$r.col,
    item.disabled && styles$r.disabled
  ], "class:list")}> ${renderComponent($$result, "ConditionalWrapper", $$ConditionalWrapper, { "condition": !!item.subText }, { "default": ($$result2) => renderTemplate`  <input type="radio"${addAttribute(name, "name")}${addAttribute(item.value, "value")}${addAttribute(item.selected, "checked")}${addAttribute(item.disabled, "disabled")}${spreadAttributes(rest)}> <span${addAttribute(styles$r.icon, "class")}></span> <span${addAttribute(styles$r.label, "class")}> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(item.label)}` })} </span> `, "wrapper": ($$result2) => renderTemplate`<div${addAttribute(styles$r.wrapper, "class")}>
children
</div>` })} ${item.subText && renderTemplate`<span${addAttribute(styles$r.subtext, "class")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(item.subText)}` })} </span>`} </label>`)} </div>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Radio/Radio.astro", void 0);

const $$Astro$h = createAstro();
const $$Rating = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Rating;
  const {
    score,
    total = 5,
    showText,
    text = "{0} out of {1}",
    showEmpty = true,
    outline = true,
    reviewCount,
    reviewText = "{0} reviews",
    reviewLink,
    reviewTarget,
    color,
    emptyColor,
    size,
    className
  } = Astro2.props;
  const classes = [
    styles$s.rating,
    outline && styles$s.outline,
    className
  ];
  const styleVariables = classNames([
    color && `--w-rating-color: ${color};`,
    size && `--w-rating-size: ${size}px;`,
    emptyColor && `--w-rating-empty-color: ${emptyColor};`
  ]);
  const translatedText = text.replace("{0}", `${score}`).replace("{1}", `${total}`);
  const translatedReviewText = reviewText.replace("{0}", `${reviewCount}`);
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(classes, "class:list")}${addAttribute(styleVariables, "style")}> ${score > 0 && renderTemplate`<span${addAttribute(styles$s.score, "class")}>${Array(Math.round(score)).fill("\u2605").join("")}</span>`} ${showEmpty && renderTemplate`<span${addAttribute(styles$s.empty, "class")}> ${Array(total - Math.round(score)).fill("\u2605").join("")} </span>`} ${showText && renderTemplate`<span${addAttribute([styles$s.text, reviewCount && styles$s.m], "class:list")}> ${translatedText} </span>`} ${reviewCount && "\u2022"} ${reviewCount && renderTemplate`${renderComponent($$result, "ConditionalWrapper", $$ConditionalWrapper, { "condition": !!reviewLink }, { "default": ($$result2) => renderTemplate`  <span${addAttribute(styles$s.text, "class")}>${translatedReviewText}</span> `, "wrapper": ($$result2) => renderTemplate`<a${addAttribute(reviewLink, "href")}${addAttribute(reviewTarget, "target")}>
children
</a>` })}`} </span>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Rating/Rating.astro", void 0);

const $$Astro$g = createAstro();
const $$Ribbon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Ribbon;
  const {
    offset,
    type,
    theme,
    className
  } = Astro2.props;
  const classes = [
    styles$t.ribbon,
    theme && styles$t[theme],
    type && styles$t[type],
    className
  ];
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(classes, "class:list")}${addAttribute(offset ? `top:${offset}px;left:${offset}px` : null, "style")}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Ribbon/Ribbon.astro", void 0);

const $$Astro$f = createAstro();
const $$Sheet = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Sheet;
  const {
    position,
    className,
    ...rest
  } = Astro2.props;
  const classes = classNames([
    styles$u.sheet,
    position && styles$u[position],
    className
  ]);
  return renderTemplate`${renderComponent($$result, "Modal", $$Modal, { "className": classes, ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Sheet/Sheet.astro", void 0);

const $$Astro$e = createAstro();
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const {
    groups,
    className
  } = Astro2.props;
  const classes = [
    styles$v.sidebar,
    className
  ];
  return renderTemplate`${maybeRenderHead()}<aside${addAttribute(classes, "class:list")}> ${groups.map((group) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${group.title && renderTemplate`<strong>${group.title}</strong>`}<ul> ${group.items.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(item.target, "target")}${addAttribute([item.active && styles$v.active], "class:list")}> ${item.icon && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${item.icon.startsWith("<svg") ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(item.icon)}` })}` : renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "type": item.icon })}`}` })}`} ${item.name} ${item.badge && renderTemplate`${renderComponent($$result2, "Badge", $$Badge, { "theme": item.badgeTheme || "success", "small": true }, { "default": ($$result3) => renderTemplate`${item.badge}` })}`} </a> </li>`)} </ul> ` })}`)} ${renderSlot($$result, $$slots["default"])} </aside>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Sidebar/Sidebar.astro", void 0);

const $$Astro$d = createAstro();
const $$Skeleton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Skeleton;
  const {
    animate = "wave",
    type = "rounded",
    width,
    height,
    color,
    waveColor,
    className
  } = Astro2.props;
  const classes = [
    animate && styles$w[animate],
    styles$w[type],
    styles$w.skeleton,
    className
  ];
  const styleVariables = classNames([
    width && `max-width: ${width}px;`,
    height && `max-height: ${height}px;`,
    color && `--w-skeleton-color: ${color};`,
    waveColor && `--w-skeleton-wave-color: ${waveColor};`
  ]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class:list")}${addAttribute(styleVariables, "style")}>&nbsp;</div>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Skeleton/Skeleton.astro", void 0);

const $$Astro$c = createAstro();
const $$Slider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Slider;
  const {
    min,
    max,
    value,
    step,
    disabled,
    color,
    background,
    thumb,
    id,
    className
  } = Astro2.props;
  const classes = [
    styles$x.slider,
    className
  ];
  const styleVariables = classNames([
    color && `--w-slider-color: ${color};`,
    background && `--w-slider-background: ${background};`,
    thumb && `--w-slider-thumb: ${thumb};`
  ]);
  return renderTemplate`${maybeRenderHead()}<input type="range"${addAttribute(min, "min")}${addAttribute(max, "max")}${addAttribute(value || min, "value")}${addAttribute(step, "step")}${addAttribute(disabled, "disabled")}${addAttribute(classes, "class:list")}${addAttribute(id, "id")}${addAttribute(styleVariables, "style")}>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Slider/Slider.astro", void 0);

const $$Astro$b = createAstro();
const $$Spinner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Spinner;
  const {
    color,
    width,
    speed,
    size,
    dashArray
  } = Astro2.props;
  const classes = [
    styles$y.spinner,
    dashArray && styles$y.dashed
  ];
  const styleVariables = classNames([
    color && `--w-spinner-color: ${color};`,
    width && `--w-spinner-width: ${width}px;`,
    speed && `--w-spinner-speed: ${speed}s;`,
    size && `--w-spinner-size: ${size}px;`,
    dashArray && `--w-spinner-dash: ${dashArray}`
  ]);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(classes, "class:list")} viewBox="25 25 50 50" role="status"${addAttribute(styleVariables, "style")}> <circle${addAttribute(styles$y.path, "class")} cx="50" cy="50" r="20" fill="none"></circle> </svg>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Spinner/Spinner.astro", void 0);

const $$Astro$a = createAstro();
const $$Spoiler = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Spoiler;
  const {
    color,
    animated = true,
    block,
    tooltip,
    tooltipPosition
  } = Astro2.props;
  const classes = [
    styles$z.spoiler,
    animated && styles$z.anim,
    block && styles$z.block
  ];
  const style = color ? `--w-spoiler-color: ${color};` : null;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(classes, "class:list")}${addAttribute(style, "style")}${addAttribute(tooltip, "data-tooltip")}${addAttribute(tooltipPosition, "data-position")} data-id="w-spoiler" role="button" tabindex="0"> ${renderSlot($$result, $$slots["default"])} </span> ${renderScript($$result, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Spoiler/Spoiler.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Spoiler/Spoiler.astro", void 0);

const $$Astro$9 = createAstro();
const $$Stepper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Stepper;
  const {
    items,
    color,
    completedColor,
    activeColor,
    borderless,
    vertical,
    className
  } = Astro2.props;
  const classes = [
    styles$A.stepper,
    borderless && styles$A.borderless,
    vertical && styles$A.vertical,
    className
  ];
  const styleVariables = [
    color && `--w-stepper-color-border: ${color}`,
    completedColor && `--w-stepper-color-complete: ${completedColor}`,
    activeColor && `--w-stepper-color-active: ${activeColor}`
  ].filter(Boolean).join(";");
  return renderTemplate`${maybeRenderHead()}<ol${addAttribute(classes, "class:list")}${addAttribute(styleVariables, "style")}> ${items?.map((item, index) => renderTemplate`<li${addAttribute([
    index !== 0 && styles$A.connect,
    item.active && styles$A.active,
    item.completed && styles$A.completed
  ], "class:list")}> <span${addAttribute(styles$A.number, "class")}> ${item.icon ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${item.icon.startsWith("<svg") ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(item.icon)}` })}` : renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "type": item.icon })}`}` })}` : index + 1} </span> ${renderComponent($$result, "ConditionalWrapper", $$ConditionalWrapper, { "condition": !!(item.title && item.subTitle) }, { "default": ($$result2) => renderTemplate`  ${item.title && renderTemplate`<span>${item.title}</span>`}${item.subTitle && renderTemplate`<span${addAttribute(styles$A.muted, "class")}>${item.subTitle}</span>`}`, "wrapper": ($$result2) => renderTemplate`<div${addAttribute(styles$A.container, "class")}>children</div>` })} </li>`)} </ol>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Stepper/Stepper.astro", void 0);

const $$Astro$8 = createAstro();
const $$Switch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Switch;
  const {
    label,
    toggled,
    offColor,
    onColor,
    reverse,
    small,
    square,
    disabled,
    className,
    ...rest
  } = Astro2.props;
  const classes = [
    styles$B.switch,
    reverse && styles$B.reverse,
    small && styles$B.small,
    square && styles$B.square,
    disabled && styles$B.disabled,
    className
  ];
  const styleVariables = classNames([
    offColor && `--w-switch-off-color: ${offColor};`,
    onColor && `--w-switch-on-color: ${onColor};`
  ]);
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(classes, "class:list")}${addAttribute(styleVariables, "style")}> <input type="checkbox"${addAttribute(toggled, "checked")}${addAttribute(disabled, "disabled")}${spreadAttributes(rest)}> <span${addAttribute(styles$B.toggle, "class")}></span> ${label && renderTemplate`<span${addAttribute(styles$B.label, "class")}>${label}</span>`} </label>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Switch/Switch.astro", void 0);

const $$Astro$7 = createAstro();
const $$Table = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Table;
  const {
    headings,
    footer,
    data,
    hover,
    striped,
    offsetStripe,
    compact,
    maxHeight,
    className
  } = Astro2.props;
  const classes = [
    styles$C.table,
    hover && styles$C.hover,
    striped && styles$C[`striped-${striped}s`],
    offsetStripe && styles$C.offset,
    compact && styles$C.compact,
    maxHeight && styles$C.scroll,
    className
  ];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class:list")}${addAttribute(maxHeight ? `max-height:${maxHeight}` : void 0, "style")}> <table> ${headings?.length && renderTemplate`<thead> <tr> ${headings.map((heading) => renderTemplate`<th>${heading}</th>`)} </tr> </thead>`} <tbody> ${data.map((row) => renderTemplate`<tr> ${row.map((column) => renderTemplate`<td> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(column)}` })} </td>`)} </tr>`)} </tbody> ${footer?.length && renderTemplate`<tfoot> <tr> ${footer.map((data2) => renderTemplate`<td>${data2}</td>`)} </tr> </tfoot>`} </table> </div>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Table/Table.astro", void 0);

const $$Astro$6 = createAstro();
const $$Tabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Tabs;
  const {
    items,
    theme,
    vertical,
    even,
    className
  } = Astro2.props;
  const classes = [
    styles$D.tabs,
    theme && styles$D[theme],
    vertical && styles$D.vertical,
    even && styles$D.even,
    className
  ];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(classes, "class:list")} data-id="w-tabs"> <div${addAttribute(styles$D.wrapper, "class")}> <div${addAttribute(styles$D.items, "class")}> ${items.map((item) => renderTemplate`<button${addAttribute(item.value, "data-value")}${addAttribute(item.active ? "true" : null, "data-active")}${addAttribute(item.disabled, "disabled")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(item.label)}` })} </button>`)} </div> </div> <div${addAttribute(styles$D.content, "class")}> ${renderSlot($$result, $$slots["default"])} </div> </section> ${renderScript($$result, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Tabs/Tabs.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Tabs/Tabs.astro", void 0);

const $$Astro$5 = createAstro();
const $$Textarea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Textarea;
  const {
    label,
    placeholder,
    subText,
    value = "",
    disabled,
    className,
    ...rest
  } = Astro2.props;
  const classes = [
    styles$E.textarea,
    className
  ];
  const useLabel = !!(label || subText);
  return renderTemplate`${renderComponent($$result, "ConditionalWrapper", $$ConditionalWrapper, { "condition": useLabel }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<textarea${addAttribute(placeholder, "placeholder")}${addAttribute(disabled, "disabled")}${addAttribute(classes, "class:list")}${spreadAttributes(rest)}>${value}</textarea> `, "wrapper": ($$result2) => renderTemplate`<label${addAttribute(styles$E["label-wrapper"], "class")}> ${label && renderTemplate`<div${addAttribute(styles$E.label, "class")}>${label}</div>`}
children
${subText && renderTemplate`<div${addAttribute(styles$E.subtext, "class")}> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(subText)}` })} </div>`} </label>` })}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Textarea/Textarea.astro", void 0);

const $$Astro$4 = createAstro();
const $$ThemeSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ThemeSwitcher;
  const {
    themes,
    toggle,
    size,
    className
  } = Astro2.props;
  const classes = [
    styles$F.switcher,
    toggle && styles$F.toggle,
    className
  ];
  const primaryTheme = themes[Object.keys(themes)[0]];
  const secondaryTheme = themes[Object.keys(themes)[1]];
  const useIcons = Astro2.slots.has("primaryIcon") && Astro2.slots.has("secondaryIcon");
  const buttonClasses = [
    styles$F.switch,
    useIcons && styles$F.icons
  ];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class:list")}${addAttribute(size ? `--w-theme-switcher-size: ${size}px;` : null, "style")} data-id="w-theme-switcher"${addAttribute(primaryTheme, "data-primary-theme")}${addAttribute(toggle ? secondaryTheme : void 0, "data-secondary-theme")}> ${Object.keys(themes).map((theme, index) => renderTemplate`<button${addAttribute(!useIcons ? `background:${theme};` : void 0, "style")}${addAttribute(themes[theme], "data-theme")}${addAttribute(themes[theme], "aria-label")}${addAttribute(buttonClasses, "class:list")}> ${index === 0 && renderTemplate`${renderSlot($$result, $$slots["primaryIcon"])}`} ${index !== 0 && renderTemplate`${renderSlot($$result, $$slots["secondaryIcon"])}`} </button>`)} </div> ${renderScript($$result, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/ThemeSwitcher/ThemeSwitcher.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/ThemeSwitcher/ThemeSwitcher.astro", void 0);

const $$Astro$3 = createAstro();
const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Timeline;
  const {
    theme,
    counter,
    alternate,
    centered,
    color,
    textColor,
    className
  } = Astro2.props;
  const classes = [
    styles$G.timeline,
    theme && theme.split(" ").map((style) => styles$G[style]),
    alternate && styles$G.alternate,
    centered && styles$G.centered,
    className
  ];
  const styleVariables = classNames([
    color && `--w-timeline-color: ${color};`,
    textColor && `--w-timeline-text-color: ${textColor};`,
    counter && `--w-timeline-counter: ${counter};`
  ]);
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(classes, "class:list")}${addAttribute(styleVariables, "style")}> ${renderSlot($$result, $$slots["default"])} </ul>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Timeline/Timeline.astro", void 0);

const $$Astro$2 = createAstro();
const $$TimelineItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TimelineItem;
  const {
    title,
    titleTag = "span",
    className
  } = Astro2.props;
  const classes = [
    styles$H.item,
    className
  ];
  const Title = titleTag;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(classes, "class:list")}> ${title && renderTemplate`${renderComponent($$result, "Title", Title, { "class:list": styles$H.title }, { "default": ($$result2) => renderTemplate`${title}` })}`} ${renderSlot($$result, $$slots["default"])} </li>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/TimelineItem/TimelineItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$Toast = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Toast;
  const {
    position,
    className,
    ...rest
  } = Astro2.props;
  const classes = classNames([
    styles$I.toast,
    className
  ]);
  const additionalProps = {
    ...position && { "data-position": position },
    titleProps: {
      "data-id": "title"
    },
    bodyProps: {
      "data-id": "body"
    }
  };
  return renderTemplate`${Astro2.slots.has("icon") ? renderTemplate`${renderComponent($$result, "Alert", $$Alert, { ...rest, "className": classes, ...additionalProps }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}`, "icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["icon"])}` })}` : renderTemplate`${renderComponent($$result, "Alert", $$Alert, { ...rest, "className": classes, ...additionalProps }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/node_modules/webcoreui/components/Toast/Toast.astro", void 0);

const Button = $$Button;
const Icon = $$Icon;

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Webcore Astro Integration"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/logo.svg"><title>Webcore Astro Integration</title>${renderHead()}</head> <body> <main class="container"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/src/components/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="flex center md" data-astro-cid-j7pv25f6>
Welcome to <img src="logo.svg" width="160" data-astro-cid-j7pv25f6> </h1> <p data-astro-cid-j7pv25f6>
Edit <code data-astro-cid-j7pv25f6>pages/index.astro</code> to get started.
		For documentation, visit <a href="https://webcoreui.dev" target="_blank" data-astro-cid-j7pv25f6>webcoreui.dev</a> </p> <div class="flex justify-center xs" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Button", Button, { "href": "https://webcoreui.dev", "target": "_blank", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
Get Started
` })} ${renderComponent($$result2, "Button", Button, { "href": "https://github.com/Frontendland/webcoreui", "target": "_blank", "theme": "secondary", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", Icon, { "type": "github", "size": 20, "data-astro-cid-j7pv25f6": true })}
GitHub
` })} </div> ` })} `;
}, "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/src/pages/index.astro", void 0);

const $$file = "/Users/macbookpro/projects/astro/expert/kitdigitalexpert/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
