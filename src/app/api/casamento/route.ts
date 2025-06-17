import { NextRequest, NextResponse } from 'next/server';
import Casamento from '../../../../models/casamento';
// CREATE
export async function POST(req: NextRequest) {
    const data = await req.json();
    const novoCasamento = await Casamento().create(data);
    return NextResponse.json(novoCasamento, { status: 201 });
}

// READ ALL
export async function GET() {
    return NextResponse.json(await Casamento().findAll(), { status: 200 });
}

// UPDATE
export async function PUT(req: NextRequest) {
    const data = await req.json();
    const { id, ...rest } = data;
    const casamento = await Casamento().findByPk(id);
    if (!casamento) {
        return NextResponse.json({ error: 'Casamento não encontrado' }, { status: 404 });
    }
    await casamento.update(rest);
    return NextResponse.json(casamento);
}

// DELETE
export async function DELETE(req: NextRequest) {
    const { id } = await req.json();
    const casamento = await Casamento().findByPk(id);
    if (!casamento) {
        return NextResponse.json({ error: 'Casamento não encontrado' }, { status: 404 });
    }
    await casamento.destroy();
    return NextResponse.json(casamento);
}