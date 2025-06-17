import { NextRequest, NextResponse } from 'next/server';
import Presente from '../../../../models/presente';
// CREATE
export async function POST(req: NextRequest) {
    const data = await req.json();
    const novoPresente = await Presente().create(data);
    return NextResponse.json(novoPresente, { status: 201 });
}
// READ ALL BY CASAMENTO
export async function GET(req: NextRequest) {
    const { id_casamento }: any = req.nextUrl.searchParams;
    return NextResponse.json(await Presente().findAll({ where: { id_casamento } }), { status: 200 });
}
// UPDATE
export async function PUT(req: NextRequest) {
    const data = await req.json();
    const { id, ...rest } = data;
    const presente = await Presente().findByPk(id);
    if (!presente) {
        return NextResponse.json({ error: 'Presente não encontrado' }, { status: 404 });
    }
    await presente.update(rest);
    return NextResponse.json(presente);
}
// DELETE
export async function DELETE(req: NextRequest) {
    const { id } = await req.json();
    const presente = await Presente().findByPk(id);
    if (!presente) {
        return NextResponse.json({ error: 'Presente não encontrado' }, { status: 404 });
    }
    await presente.destroy();
    return NextResponse.json(presente);
}