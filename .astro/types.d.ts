declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"2012-09-06-configurar-ftp-wp-config-wordpress.md": {
	id: "2012-09-06-configurar-ftp-wp-config-wordpress.md";
  slug: "2012-09-06-configurar-ftp-wp-config-wordpress";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2012-09-08-proteger-arquivo-wp-config-wordpress.md": {
	id: "2012-09-08-proteger-arquivo-wp-config-wordpress.md";
  slug: "2012-09-08-proteger-arquivo-wp-config-wordpress";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2012-09-23-habilitar-acesso-email-wordpress.md": {
	id: "2012-09-23-habilitar-acesso-email-wordpress.md";
  slug: "2012-09-23-habilitar-acesso-email-wordpress";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2012-09-23-habilitar-keep-alive-apache-linux.md": {
	id: "2012-09-23-habilitar-keep-alive-apache-linux.md";
  slug: "2012-09-23-habilitar-keep-alive-apache-linux";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2012-09-23-principais-tabelas-wordpress-funcoes.md": {
	id: "2012-09-23-principais-tabelas-wordpress-funcoes.md";
  slug: "2012-09-23-principais-tabelas-wordpress-funcoes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2012-10-04-visualizar-configuracoes-servidor-terminal-linux.md": {
	id: "2012-10-04-visualizar-configuracoes-servidor-terminal-linux.md";
  slug: "2012-10-04-visualizar-configuracoes-servidor-terminal-linux";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2013-07-29-resolver-erro-fatal-orderhistory-id-order-state-empty-prestashop.md": {
	id: "2013-07-29-resolver-erro-fatal-orderhistory-id-order-state-empty-prestashop.md";
  slug: "2013-07-29-resolver-erro-fatal-orderhistory-id-order-state-empty-prestashop";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2015-05-10-como-verificar-espaco-alocado-banco-dados-mysql.md": {
	id: "2015-05-10-como-verificar-espaco-alocado-banco-dados-mysql.md";
  slug: "2015-05-10-como-verificar-espaco-alocado-banco-dados-mysql";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2015-05-16-como-redefinir-senha-administrador-wordpress-bloqueio.md": {
	id: "2015-05-16-como-redefinir-senha-administrador-wordpress-bloqueio.md";
  slug: "2015-05-16-como-redefinir-senha-administrador-wordpress-bloqueio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2015-05-20-como-resolver-erro-php-regular-expression-limit-reached-joomla.md": {
	id: "2015-05-20-como-resolver-erro-php-regular-expression-limit-reached-joomla.md";
  slug: "2015-05-20-como-resolver-erro-php-regular-expression-limit-reached-joomla";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2015-05-20-corrigir-erro-warning-parametro-1-modmainmenuhelper-buildxml-joomla.md": {
	id: "2015-05-20-corrigir-erro-warning-parametro-1-modmainmenuhelper-buildxml-joomla.md";
  slug: "2015-05-20-corrigir-erro-warning-parametro-1-modmainmenuhelper-buildxml-joomla";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2015-05-20-corrigir-problemas-codigos-rastreio-prestashop.md": {
	id: "2015-05-20-corrigir-problemas-codigos-rastreio-prestashop.md";
  slug: "2015-05-20-corrigir-problemas-codigos-rastreio-prestashop";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2015-05-29-excluir-pedidos-nao-concluidos-prestashop.md": {
	id: "2015-05-29-excluir-pedidos-nao-concluidos-prestashop.md";
  slug: "2015-05-29-excluir-pedidos-nao-concluidos-prestashop";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2015-08-07-como-corrigir-erro-paypal-callback-url-wrong-type.md": {
	id: "2015-08-07-como-corrigir-erro-paypal-callback-url-wrong-type.md";
  slug: "2015-08-07-como-corrigir-erro-paypal-callback-url-wrong-type";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2015-10-21-como-corrigir-erro-phpmailer-recipients-failed-joomla.md": {
	id: "2015-10-21-como-corrigir-erro-phpmailer-recipients-failed-joomla.md";
  slug: "2015-10-21-como-corrigir-erro-phpmailer-recipients-failed-joomla";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2015-10-21-como-habilitar-depuracao-erros-prestashop.md": {
	id: "2015-10-21-como-habilitar-depuracao-erros-prestashop.md";
  slug: "2015-10-21-como-habilitar-depuracao-erros-prestashop";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2015-10-22-como-corrigir-erro-mage-registry-key-magento.md": {
	id: "2015-10-22-como-corrigir-erro-mage-registry-key-magento.md";
  slug: "2015-10-22-como-corrigir-erro-mage-registry-key-magento";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2015-10-22-como-corrigir-erro-technical-error-prestashop.md": {
	id: "2015-10-22-como-corrigir-erro-technical-error-prestashop.md";
  slug: "2015-10-22-como-corrigir-erro-technical-error-prestashop";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2015-11-19-alterar-nome-link-pagina-inicial-prestashop.md": {
	id: "2015-11-19-alterar-nome-link-pagina-inicial-prestashop.md";
  slug: "2015-11-19-alterar-nome-link-pagina-inicial-prestashop";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2015-11-19-como-listar-posts-por-categoria-no-wordpress-usando-sql.md": {
	id: "2015-11-19-como-listar-posts-por-categoria-no-wordpress-usando-sql.md";
  slug: "2015-11-19-como-listar-posts-por-categoria-no-wordpress-usando-sql";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2015-11-19-solucao-instalacao-modulos-temas-prestashop.md": {
	id: "2015-11-19-solucao-instalacao-modulos-temas-prestashop.md";
  slug: "2015-11-19-solucao-instalacao-modulos-temas-prestashop";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2016-10-25-conhecendo-materializecss-framework.md": {
	id: "2016-10-25-conhecendo-materializecss-framework.md";
  slug: "2016-10-25-conhecendo-materializecss-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2016-11-04-introducao-desenvolvimento-agil-scrum.md": {
	id: "2016-11-04-introducao-desenvolvimento-agil-scrum.md";
  slug: "2016-11-04-introducao-desenvolvimento-agil-scrum";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2017-01-09-introducao-linux-historia-significado.md": {
	id: "2017-01-09-introducao-linux-historia-significado.md";
  slug: "2017-01-09-introducao-linux-historia-significado";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2017-01-10-comando-ls-linux-listagem-diretorios.md": {
	id: "2017-01-10-comando-ls-linux-listagem-diretorios.md";
  slug: "2017-01-10-comando-ls-linux-listagem-diretorios";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2017-05-05-basico-programacao-sequencia-instrucoes.md": {
	id: "2017-05-05-basico-programacao-sequencia-instrucoes.md";
  slug: "2017-05-05-basico-programacao-sequencia-instrucoes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2017-09-15-o-que-e-um-algoritmo-propriedades-tipos.md": {
	id: "2017-09-15-o-que-e-um-algoritmo-propriedades-tipos.md";
  slug: "2017-09-15-o-que-e-um-algoritmo-propriedades-tipos";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2019-09-16-converter-mapa-caracteres-mysql-utf8.md": {
	id: "2019-09-16-converter-mapa-caracteres-mysql-utf8.md";
  slug: "2019-09-16-converter-mapa-caracteres-mysql-utf8";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-09-23-pesquisa-procedures-sql-texto-exato.md": {
	id: "2023-09-23-pesquisa-procedures-sql-texto-exato.md";
  slug: "2023-09-23-pesquisa-procedures-sql-texto-exato";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
