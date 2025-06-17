import { NextRequest, NextResponse } from 'next/server';
import ListaPresente from '../../../../models/listapresente';

// CREATE
export async function POST(req: NextRequest) {
    const data = await req.json();
    const novaLista = await ListaPresente().create(data);
    return NextResponse.json(novaLista, { status: 201 });
}

// READ ALL
export async function GET(req: NextRequest) {
    const { id_casamento }: any = req.nextUrl.searchParams;
    return NextResponse.json(await ListaPresente().findAll({ where: { id_casamento } }), { status: 200 });
}

// UPDATE
export async function PUT(req: NextRequest) {
    const data = await req.json();
    const { id, ...rest } = data;
    const lista = await ListaPresente().findByPk(id);
    if (!lista) {
        return NextResponse.json({ error: 'Lista não encontrada' }, { status: 404 });
    }
    await lista.update(rest);
    return NextResponse.json(lista);
}

// DELETE
export async function DELETE(req: NextRequest) {
    const { id } = await req.json();
    const lista = await ListaPresente().findByPk(id);
    if (!lista) {
        return NextResponse.json({ error: 'Lista não encontrada' }, { status: 404 });
    }
    await lista.destroy();
    return NextResponse.json(lista);
}